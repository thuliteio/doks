#! /usr/bin/env python
"""
Scripts fetch sources from repositories (Also clones the repositories) 
and make markdown sources available for the webpage
"""
from __future__ import print_function
import sys
import argparse
import os
from git import Repo
from operator import itemgetter
from operator import attrgetter
from datetime import datetime
from pathlib import Path

def get_commit_infos(commits):
    authors = set()
    last_change = None
    first_change = None
    for commit in commits:
        committed_date, author = attrgetter("committed_date", "author")(commit)
        if last_change is None or last_change < committed_date:
            last_change = committed_date
        if first_change is None or committed_date < first_change:
            first_change = committed_date
        authors.add(author.name)
    return authors, first_change, last_change

def create_page(title, authors, md_text, date, lastmod):
    # refs = map(lambda ref: "[" + ref + "](" + ref + ")", references)
    items = [
        "---",
        "contributors: %s"%authors,
        "title: \"%s\""%title,
        "date: %s"%date,
        "lastmod: %s"%lastmod,
        "draft: false",
        "images: []",
        "menu:",
        "  docs:",
        "    parent: \"schemas\"",
        "weight: 10",
        "toc: true",
        "---",
        md_text,
    ]
    return "\n".join(items)

remote_url = "https://github.com/ObserveRTC/schemas-2.0"
local_dir = "./repositories/schemas"
content_dir = "../content"

def fetch():
    if not os.path.exists(local_dir):
        os.makedirs(local_dir)
        Repo.clone_from(remote_url, local_dir)
    repo = Repo(local_dir)
    repo.remotes.origin.pull()
    inside_repo_dir = os.path.join("generated-schemas", "reports", "v3")
    reports_dir = os.path.join(local_dir, inside_repo_dir)
    md_texts = []
    all_commits = []
    for file in os.listdir(reports_dir):
        if file.endswith(".md") is False:
            continue
        in_file = os.path.join(inside_repo_dir, file)
        target_file = os.path.join(reports_dir, file)
        commits = list(repo.iter_commits('--all', paths=in_file))
        all_commits.extend(commits)
        md_text = Path(target_file).read_text()
        md_texts.append({
            "filename": file,
            "text": md_text,
        })
    authors, first_change, last_change = get_commit_infos(all_commits)
    date = datetime.fromtimestamp(first_change)
    lastmod = datetime.fromtimestamp(last_change)
    md_texts = sorted(md_texts, key=lambda d: d['filename']) 
    md_text = "\n\n".join(map(lambda x: x['text'], md_texts))
    target_dir = os.path.join(content_dir, "docs", "schemas", "reports.md")

    reports_page = create_page("Reports",
        authors, 
        md_text,
        date, 
        lastmod
    )
    

    inside_repo_file = os.path.join("generated-schemas", "samples", "v2", "ClientSample.md")
    source_file = os.path.join(local_dir, inside_repo_file)
    commits = list(repo.iter_commits('--all', paths=inside_repo_file))
    authors, first_change, last_change = get_commit_infos(all_commits)
    date = datetime.fromtimestamp(first_change)
    lastmod = datetime.fromtimestamp(last_change)
    md_text = Path(source_file).read_text()
    md_texts = []
    target_dir = os.path.join(content_dir, "docs", "schemas", "client-samples.md")

    client_sample_page = create_page("Client Sample",
        authors, 
        md_text,
        date, 
        lastmod
    )

    inside_repo_file = os.path.join("generated-schemas", "samples", "v2", "SfuSample.md")
    source_file = os.path.join(local_dir, inside_repo_file)
    commits = list(repo.iter_commits('--all', paths=inside_repo_file))
    authors, first_change, last_change = get_commit_infos(all_commits)
    date = datetime.fromtimestamp(first_change)
    lastmod = datetime.fromtimestamp(last_change)
    md_text = Path(source_file).read_text()
    md_texts = []
    
    sfu_sample_page = create_page("SFU Sample",
        authors, 
        md_text,
        date, 
        lastmod
    )
    return reports_page, client_sample_page, sfu_sample_page


def main():
    parser = argparse.ArgumentParser(description=__doc__)

    # parser.add_argument(
    #     "input", nargs="?", default="-",
    #     metavar="INPUT_FILE", type=argparse.FileType("r"),
    #     help="path to the input file (read from stdin if omitted)")

    # args = parser.parse_args()
    target_dir = os.path.join(content_dir, "docs", "schemas")
    reports_page, client_sample_page, sfu_sample_page = fetch()
    
    print(reports_page, file=open(os.path.join(target_dir, "reports.md"), 'w+'))
    print(client_sample_page, file=open(os.path.join(target_dir, "client-sample.md"), 'w+'))
    print(sfu_sample_page, file=open(os.path.join(target_dir, "sfu-sample.md"), 'w+'))

if __name__ == "__main__":
    main()