---
contributors: {'Balazs Kreith'}
title: "Reports"
date: 2021-06-08 11:11:43
lastmod: 2021-11-15 13:20:23
draft: false
images: []
menu:
  docs:
    parent: "schemas"
weight: 10
toc: true
---
## CallEventReport
---


Observer created reports related to events (call started, call ended, client joined, etc...) indicated by the incoming samples.


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The unique identifier of the service
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
name | string | Yes | The name of the event. Possible values are: CALL_STARTED, CALL_ENDED, CLIENT_JOINED, CLIENT_LEFT, PEER_CONNECTION_OPENED, PEER_CONNECTION_CLOSED, MEDIA_TRACK_ADDED, MEDIA_TRACK_REMOVED
mediaUnitId | string | No | The media unit id the report belongs to
marker | string | No | The marker the originated sample is reported with
callId | string | No | The generated unique identifier of the call
roomId | string | No | webrtc app provided room id
clientId | string | No | The generated unique identifier of the client
userId | string | No | webrtc app provided user identifier
peerConnectionId | string | No | The unique identifier of the peer connection
mediaTrackId | string | No | The unique identifier of the media track
SSRC | long | No | The SSRC identifier of the RTP stream a trackId belongs to
sampleTimestamp | long | No | The timestamp of the sample the event related to
sampleSeq | int | No | The sequence number of the sample the event may related to
message | string | No | the human readable message of the event
value | string | No | the value of the event
attachments | string | No | attachment the event may created with

## CallMetaReport
---


Metadata belongs to a call and can be useful


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The unique identifier of the service
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
mediaUnitId | string | No | The media unit id the report belongs to
marker | string | No | The marker the originated sample is reported with
callId | string | No | The generated unique identifier of the call
roomId | string | No | webrtc app provided room id
clientId | string | No | The generated unique identifier of the client
userId | string | No | webrtc app provided user identifier
peerConnectionId | string | No | The unique identifier of the peer connection
sampleTimestamp | long | No | The timestamp of the sample the event related to
sampleSeq | int | No | The sequence number of the sample the event may related to
type | string | No | The type of the meta data. Possible values are: CERTIFICATE, CODEC, ICE_LOCAL_CANDIDATE, ICE_REMOTE_CANDIDATE, ICE_SERVER, MEDIA_CONSTRAINT, MEDIA_DEVICE, MEDIA_SOURCE, USER_MEDIA_ERROR,
payload | string | No | The payload for the metadata reported for the peeer connection

## ClientDataChannelReport
---


A Report created for PeerConnection Data Channel.


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The unique identifier of the service
mediaUnitId | string | Yes | The media unit id the report belongs to
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
callId | string | Yes | The generated unique identifier of the call
clientId | string | Yes | The generated unique identifier of the client
peerConnectionId | string | Yes | The unique identifier of the peer connection
sampleSeq | int | Yes | The sequence number of the sample the report is generated from
marker | string | No | The marker the originated sample is reported with
roomId | string | No | webrtc app provided room id
userId | string | No | webrtc app provided user identifier
peerConnectionLabel | string | No | The webrtc app provided label for the peer connection
label | string | No | The label of the data channel
protocol | string | No | The protocol used for the data channel
state | string | No | The state of the data channel
messagesSent | int | No | Represents the total number of API message events sent
bytesSent | long | No | Represents the total number of payload bytes sent on the corresponded data channel
messagesReceived | int | No | Represents the total number of API message events received on the corresponded data channel
bytesReceived | long | No | Represents the total number of payload bytes received on the corresponded data channel

## ClientExtensionReport
---


A Report created for Extended provided arbitrary data.


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The unique identifier of the service
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
extensionType | string | Yes | The name of the event
serviceName | string | No | The resolved service name configured for the service Id
mediaUnitId | string | No | The media unit id the report belongs to
marker | string | No | The marker the originated sample is reported with
callId | string | No | The generated unique identifier of the call
roomId | string | No | webrtc app provided room id
clientId | string | No | The generated unique identifier of the client
userId | string | No | webrtc app provided user identifier
peerConnectionId | string | No | The unique identifier of the peer connection
sampleSeq | int | No | The sequence number of the sample the event may related to
payload | string | No | the human readable message of the event

## CallMetaReport
---


Metadata belongs to a call and can be useful


Name | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The unique identifier of the service
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
mediaUnitId | string | No | The media unit id the report belongs to
marker | string | No | The marker the originated sample is reported with
callId | string | No | The generated unique identifier of the call
roomId | string | No | webrtc app provided room id
clientId | string | No | The generated unique identifier of the client
userId | string | No | webrtc app provided user identifier
peerConnectionId | string | No | The unique identifier of the peer connection
sampleTimestamp | long | No | The timestamp of the sample the event related to
sampleSeq | int | No | The sequence number of the sample the event may related to
type | string | No | The type of the meta data reported for the peer connection
payload | string | No | The payload for the metadata reported for the peeer connection

## ClientTransportReport
---


A Report created for Client PeerConnection Transport. It is a combination of Transport report, sender, receiver, local, remote and candidate pair of ICE together with the used certificates


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The unique identifier of the service
mediaUnitId | string | Yes | The media unit id the report belongs to
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
callId | string | Yes | The generated unique identifier of the call
clientId | string | Yes | The generated unique identifier of the client
peerConnectionId | string | Yes | The unique identifier of the peer connection
marker | string | No | The marker the originated sample is reported with
roomId | string | No | webrtc app provided room id
userId | string | No | webrtc app provided user identifier
label | string | No | The webrtc app provided label the peer connection is marked with
packetsSent | int | No | Represents the total number of packets sent on the corresponded transport
packetsReceived | int | No | Represents the total number of packets received on the corresponded transport
bytesSent | long | No | Represents the total amount of bytes sent on the corresponded transport
bytesReceived | long | No | Represents the total amount of bytes received on the corresponded transport
iceRole | string | No | Represent the current role of ICE under DTLS Transport
iceLocalUsernameFragment | string | No | Represent the current local username fragment used in message validation procedures for ICE under DTLS Transport
dtlsState | string | No | Represents the current state of DTLS for the peer connection transport layer
iceTransportState | string | No | Represents the current transport state (RTCIceTransportState) of ICE for the peer connection transport layer
tlsVersion | string | No | Represents the version number of the TLS used in the corresponded transport
dtlsCipher | string | No | Represents the name of the DTLS cipher used in the corresponded transport
srtpCipher | string | No | Represents the name of the SRTP cipher used in the corresponded transport
tlsGroup | string | No | Represents the name of the IANA TLS Supported Groups used in the corresponded transport
selectedCandidatePairChanges | int | No | The total number of candidate pair changes over the peer connection
localAddress | string | No | The address of the candidate (IPv4, IPv6, FQDN)
localPort | int | No | The locally used port to communicate with the remote peer
localProtocol | string | No | The protocol used by the local endpoint for the corresponded transport
localCandidateType | string | No | The type of the ICE candidate used at the local endpoint on the corresponded transport
localCandidateICEServerUrl | string | No | The url of the ICE server used by the local endpoint on the corresponded transport
localCandidateRelayProtocol | string | No | The relay protocol of the ICE candidate used by the local endpoint on the corresponded transport
remoteAddress | string | No | The address of the candidate (IPv4, IPv6, FQDN)
remotePort | int | No | The remotely used port to communicate with the remote peer
remoteProtocol | string | No | The protocol used by the remote endpoint for the corresponded transport
remoteCandidateType | string | No | The type of the ICE candidate used at the remote endpoint on the corresponded transport
remoteCandidateICEServerUrl | string | No | The url of the ICE server used by the remote endpoint on the corresponded transport
remoteCandidateRelayProtocol | string | No | The relay protocol of the ICE candidate used by the remote endpoint on the corresponded transport
candidatePairState | string | No | The state of ICE Candidate Pairs (RTCStatsIceCandidatePairState) on the corresponded transport
candidatePairPacketsSent | int | No | The total number of packets sent using the last selected candidate pair over the corresponded transport
candidatePairPacketsReceived | int | No | The total number of packets received using the last selected candidate pair over the corresponded transport
candidatePairBytesSent | long | No | The total number of bytes sent using the last selected candidate pair over the corresponded transport
candidatePairBytesReceived | long | No | The total number of bytes received using the last selected candidate pair over the corresponded transport
candidatePairLastPacketSentTimestamp | long | No | Represents the timestamp at which the last packet was sent on the selected candidate pair, excluding STUN packets over the corresponded transport (UTC Epoch in ms)
candidatePairLastPacketReceivedTimestamp | long | No | Represents the timestamp at which the last packet was received on the selected candidate pair, excluding STUN packets over the corresponded transport (UTC Epoch in ms)
candidatePairFirstRequestTimestamp | long | No | Represents the timestamp at which the first STUN request was sent on this particular candidate pair over the corresponded transport (UTC Epoch in ms)
candidatePairLastRequestTimestamp | long | No | Represents the timestamp at which the last STUN request was sent on this particular candidate pair over the corresponded transport (UTC Epoch in ms)
candidatePairLastResponseTimestamp | long | No | Represents the timestamp at which the last STUN response was received on this particular candidate pair over the corresponded transport (UTC Epoch in ms)
candidatePairTotalRoundTripTime | double | No | Represents the sum of all round trip time measurements in seconds since the beginning of the session, based on STUN connectivity check over the corresponded transport
candidatePairCurrentRoundTripTime | double | No | Represents the last round trip time measurements in seconds based on STUN connectivity check over the corresponded transport
candidatePairAvailableOutgoingBitrate | double | No | The sum of the underlying cc algorithm provided outgoing bitrate for the RTP streams over the corresponded transport
candidatePairAvailableIncomingBitrate | double | No | The sum of the underlying cc algorithm provided incoming bitrate for the RTP streams over the corresponded transport
candidatePairCircuitBreakerTriggerCount | int | No | The total number of circuit breaker triggered over the corresponded transport using the selected candidate pair
candidatePairRequestsReceived | int | No | Represents the total number of connectivity check requests received on the selected candidate pair using the corresponded transport
candidatePairRequestsSent | int | No | Represents the total number of connectivity check requests sent on the selected candidate pair using the corresponded transport
candidatePairResponsesReceived | int | No | Represents the total number of connectivity check responses received on the selected candidate pair using the corresponded transport
candidatePairResponsesSent | int | No | Represents the total number of connectivity check responses sent on the selected candidate pair using the corresponded transport
candidatePairRetransmissionReceived | int | No | Represents the total number of connectivity check retransmission received on the selected candidate pair using the corresponded transport
candidatePairRetransmissionSent | int | No | Represents the total number of connectivity check retransmission sent on the selected candidate pair using the corresponded transport
candidatePairConsentRequestsSent | int | No | Represents the total number of consent requests sent on the selected candidate pair using the corresponded transport
candidatePairConsentExpiredTimestamp | long | No | Represents the timestamp at which the latest valid STUN binding response expired on the selected candidate pair using the corresponded transport
candidatePairBytesDiscardedOnSend | long | No | Total amount of bytes for this candidate pair that have been discarded due to socket errors on the selected candidate pair using the corresponded transport
candidatePairPacketsDiscardedOnSend | long | No | Total amount of packets for this candidate pair that have been discarded due to socket errors on the selected candidate pair using the corresponded transport
candidatePairRequestBytesSent | long | No | Total number of bytes sent for connectivity checks on the selected candidate pair using the corresponded transport
candidatePairConsentRequestBytesSent | long | No | Total number of bytes sent for consent requests on the selected candidate pair using the corresponded transport
candidatePairResponseBytesSent | long | No | Total number of bytes sent for connectivity check responses on the selected candidate pair using the corresponded transport
sctpSmoothedRoundTripTime | double | No | The latest smoothed round-trip time value, corresponding to spinfo_srtt defined in [RFC6458] but converted to seconds. 
sctpCongestionWindow | double | No | The latest congestion window, corresponding to spinfo_cwnd.
sctpReceiverWindow | double | No | The latest receiver window, corresponding to sstat_rwnd.
sctpMtu | int | No | The latest maximum transmission unit, corresponding to spinfo_mtu.
sctpUnackData | int | No | The number of unacknowledged DATA chunks, corresponding to sstat_unackdata.

## InboundAudioTrackReport
---


A Report created for Inbound Audio Tracks. A combination of Codec metadata carrying inbound and remote outbound RTP stats measurements


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The unique identifier of the service
mediaUnitId | string | Yes | The media unit id the report belongs to
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
callId | string | Yes | The generated unique identifier of the call
clientId | string | Yes | The generated unique identifier of the client
peerConnectionId | string | Yes | The unique identifier of the peer connection
sampleSeq | int | Yes | The sequence number of the sample the report is generated from
ssrc | long | Yes | The RTP SSRC field
marker | string | No | The marker the originated sample is reported with
roomId | string | No | webrtc app provided room id
userId | string | No | webrtc app provided user identifier
label | string | No | The webrtc app provided label the peer connection is labeled with
trackId | string | No | The id of the track
rtpStreamId | string | No | The id of the RTP stream connected to a remote media unit (such as an SFU)
remoteTrackId | string | No | The id of the remote track this inbound track is originated from
remoteUserId | string | No | The webrtc app provided user id the track belongs to, or if the webrtc app did not provided the observer tried to match it
remoteClientId | string | No | The observer matched remote client Id
remotePeerConnectionId | string | No | The observer matched remote Peer Connection Id
packetsReceived | int | No | The total number of packets received on the corresponded synchronization source
packetsLost | int | No | The total number of bytes received on the corresponded synchronization source
jitter | double | No | The corresponded synchronization source reported jitter
packetsDiscarded | int | No | The total number of packets missed the playout point and therefore discarded by the jitterbuffer
packetsRepaired | int | No | The total number of packets repaired by either FEC or due to retransmission on the corresponded synchronization source
burstPacketsLost | int | No | The total number of packets lost in burst (RFC6958)
burstPacketsDiscarded | int | No | The total number of packets discarded in burst (RFC6958)
burstLossCount | int | No | The total number of burst happened causes burstPacketsLost on the corresponding synchronization source
burstDiscardCount | int | No | The total number of burst happened causes burstPacketsDiscarded on the corresponding synchronization source
burstLossRate | double | No | The fraction of RTP packets lost during bursts proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
burstDiscardRate | double | No | The fraction of RTP packets discarded during bursts proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
gapLossRate | double | No | The fraction of RTP packets lost during gap proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
gapDiscardRate | double | No | The fraction of RTP packets discarded during gap proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
voiceActivityFlag | boolean | No | Indicate if the last RTP packet received contained voice activity based on the presence of the V bit in the extension header
lastPacketReceivedTimestamp | boolean | No | Represents the timestamp at which the last packet was received on the corresponded synchronization source (ssrc)
averageRtcpInterval | double | No | The average RTCP interval between two consecutive compound RTCP packets sent for the corresponding synchronization source (ssrc)
headerBytesReceived | long | No | Total number of RTP header and padding bytes received over the corresponding synchronization source (ssrc)
fecPacketsReceived | int | No | Total number of FEC packets received over the corresponding synchronization source (ssrc)
fecPacketsDiscarded | int | No | Total number of FEC packets discarded over the corresponding synchronization source (ssrc) due to 1) late arrive; 2) the target RTP packet has already been repaired.
bytesReceived | long | No | Total number of bytes received over the corresponding synchronization source (ssrc) due to 1) late arrive; 2) the target RTP packet has already been repaired.
packetsFailedDecryption | int | No | Total number of packets received and failed to decrypt over the corresponding synchronization source (ssrc) due to 1) late arrive; 2) the target RTP packet has already been repaired.
packetsDuplicated | int | No | Total number of packets identified as duplicated over the corresponding synchronization source (ssrc).
perDscpPacketsReceived | double | No | The total number of DSCP flagged RTP packets received over the corresponding synchronization source (ssrc)
nackCount | int | No | Count the total number of Negative ACKnowledgement (NACK) packets sent and belongs to the corresponded synchronization source (ssrc)
totalProcessingDelay | double | No | The total processing delay in seconds spend on buffering RTP packets from received up until packets are decoded
estimatedPlayoutTimestamp | double | No | The estimated playout time of the corresponded synchronization source
jitterBufferDelay | double | No | The total time of RTP packets spent in jitterbuffer waiting for frame completion due to network uncertenity.
jitterBufferEmittedCount | int | No | The total number of audio samples or video frames that have come out of the jitter buffer on the corresponded synchronization source (ssrc)
decoderImplementation | string | No | Indicate the name of the decoder implementation library
packetsSent | int | No | Total number of RTP packets sent at the remote endpoint to this endpoint on this synchronization source
bytesSent | long | No | Total number of payload bytes sent at the remote endpoint to this endpoint on this synchronization source
remoteTimestamp | double | No | The timestamp corresnponds to the time in UTC Epoch the remote endpoint reported the statistics belong to the sender side and correspond to the synchronization source (ssrc)
reportsSent | int | No | The number of SR reports the remote endpoint sent corresponded to synchronization source (ssrc) this report belongs to
ended | boolean | No | Flag represents if the receiver ended the media stream track or not.
payloadType | int | No | The type of the payload the RTP packet SSRC belongs to
mimeType | string | No | the MIME type of the codec (e.g.: video/vp8)
clockRate | long | No | The negotiated clock rate the RTP timestamp is generated of
channels | int | No | The number of channels for audio is used (in stereo it is 2, otherwise it is most likely null)
sdpFmtpLine | string | No | The a=fmtp line in the SDP corresponding to the codec

## InboundVideoTrackReport
---


A Report created for Inbound Video Tracks. A combination of Codec metadata carrying inbound and remote outbound RTP stats measurements


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The unique identifier of the service
mediaUnitId | string | Yes | The media unit id the report belongs to
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
callId | string | Yes | The generated unique identifier of the call
clientId | string | Yes | The generated unique identifier of the client
peerConnectionId | string | Yes | The unique identifier of the peer connection
sampleSeq | int | Yes | The sequence number of the sample the report is generated from
ssrc | long | Yes | The RTP SSRC field
marker | string | No | The marker the originated sample is reported with
roomId | string | No | webrtc app provided room id
userId | string | No | webrtc app provided user identifier
label | string | No | The webrtc app provided label the peer connection is labeled with
trackId | string | No | The id of the track
rtpStreamId | string | No | The id of the RTP stream connected to a remote media unit (such as an SFU)
remoteTrackId | string | No | The id of the remote track this inbound track is originated from
remoteUserId | string | No | The webrtc app provided user id the track belongs to, or if the webrtc app did not provided the observer tried to match it
remoteClientId | string | No | The observer matched remote client Id
remotePeerConnectionId | string | No | The observer matched remote Peer Connection Id
packetsReceived | int | No | The total number of packets received on the corresponded synchronization source
packetsLost | int | No | The total number of bytes received on the corresponded synchronization source
jitter | double | No | The corresponded synchronization source reported jitter
packetsDiscarded | int | No | The total number of packets missed the playout point and therefore discarded by the jitterbuffer
packetsRepaired | int | No | The total number of packets repaired by either FEC or due to retransmission on the corresponded synchronization source
burstPacketsLost | int | No | The total number of packets lost in burst (RFC6958)
burstPacketsDiscarded | int | No | The total number of packets discarded in burst (RFC6958)
burstLossCount | int | No | The total number of burst happened causes burstPacketsLost on the corresponding synchronization source
burstDiscardCount | int | No | The total number of burst happened causes burstPacketsDiscarded on the corresponding synchronization source
burstLossRate | double | No | The fraction of RTP packets lost during bursts proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
burstDiscardRate | double | No | The fraction of RTP packets discarded during bursts proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
gapLossRate | double | No | The fraction of RTP packets lost during gap proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
gapDiscardRate | double | No | The fraction of RTP packets discarded during gap proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
framesDropped | int | No | The total number of frames dropped at decoding process on the corresponding synchronization source
partialFramesLost | double | No | The total number of partial frames lost at decoding process on the corresponding synchronization source
fullFramesLost | int | No | The total number of full frames lost at decoding process on the corresponding synchronization source
framesDecoded | int | No | Indicate the number of frames completly and without error decoded on the corresponded synchronization source (ssrc)
keyFramesDecoded | int | No | Indicate the number of keyframes received on the corresponded synchronization source (ssrc)
frameWidth | int | No | Indicate the width of the frame received on the corresponded synchronization source (ssrc)
frameHeight | int | No | Indicate the height of the frame received on the corresponded synchronization source (ssrc)
frameBitDepth | int | No | Indicate the bit depth per pixel of the last decoded frame received on the corresponded synchronization source (ssrc)
framesPerSecond | double | No | Indicate the number of decoded frames in the last second received on the corresponded synchronization source (ssrc)
qpSum | long | No | sum of QP values of frames decoded on the corresponded synchronization source (ssrc)
totalDecodeTime | long | No | The total number of seconds spent on decoding frames on the corresponded synchronization source (ssrc)
totalInterFrameDelay | long | No | The total number of inter frame delay on the corresponded synchronization source (ssrc)
totalSquaredInterFrameDelay | long | No | The total number of inter frame delay squere on the corresponded synchronization source (ssrc) Useful for variance calculation for interframe delays
lastPacketReceivedTimestamp | boolean | No | Represents the timestamp at which the last packet was received on the corresponded synchronization source (ssrc)
averageRtcpInterval | double | No | The average RTCP interval between two consecutive compound RTCP packets sent for the corresponding synchronization source (ssrc)
headerBytesReceived | long | No | Total number of RTP header and padding bytes received over the corresponding synchronization source (ssrc)
fecPacketsReceived | int | No | Total number of FEC packets received over the corresponding synchronization source (ssrc)
fecPacketsDiscarded | int | No | Total number of FEC packets discarded over the corresponding synchronization source (ssrc) due to 1) late arrive; 2) the target RTP packet has already been repaired.
bytesReceived | long | No | Total number of bytes received over the corresponding synchronization source (ssrc) due to 1) late arrive; 2) the target RTP packet has already been repaired.
packetsFailedDecryption | int | No | Total number of packets received and failed to decrypt over the corresponding synchronization source (ssrc) due to 1) late arrive; 2) the target RTP packet has already been repaired.
packetsDuplicated | int | No | Total number of packets identified as duplicated over the corresponding synchronization source (ssrc).
perDscpPacketsReceived | double | No | The total number of DSCP flagged RTP packets received over the corresponding synchronization source (ssrc)
firCount | int | No | Count the total number of Full Intra Request sent by this receiver and belongs to the corresponded synchronization source (ssrc)
pliCount | int | No | Count the total number of Picture Loss Indication sent by this receiver and belongs to the corresponded synchronization source (ssrc)
nackCount | int | No | Count the total number of Negative ACKnowledgement (NACK) packets sent and belongs to the corresponded synchronization source (ssrc)
sliCount | int | No | Count the total number of Slice Loss Indication sent by this receiver and belongs to the corresponded synchronization source (ssrc)
totalProcessingDelay | double | No | The total processing delay in seconds spend on buffering RTP packets from received up until packets are decoded
estimatedPlayoutTimestamp | double | No | The estimated playout time of the corresponded synchronization source
jitterBufferDelay | double | No | The total time of RTP packets spent in jitterbuffer waiting for frame completion due to network uncertenity.
jitterBufferEmittedCount | int | No | The total number of audio samples or video frames that have come out of the jitter buffer on the corresponded synchronization source (ssrc)
framesReceived | int | No | Represents the total number of complete frames received on the corresponded synchronization source (ssrc)
decoderImplementation | string | No | Indicate the name of the decoder implementation library
packetsSent | int | No | Total number of RTP packets sent at the remote endpoint to this endpoint on this synchronization source
bytesSent | long | No | Total number of payload bytes sent at the remote endpoint to this endpoint on this synchronization source
remoteTimestamp | double | No | The timestamp corresnponds to the time in UTC Epoch the remote endpoint reported the statistics belong to the sender side and correspond to the synchronization source (ssrc)
reportsSent | int | No | The number of SR reports the remote endpoint sent corresponded to synchronization source (ssrc) this report belongs to
ended | boolean | No | Flag represents if the receiver ended the media stream track or not.
payloadType | int | No | The type of the payload the RTP packet SSRC belongs to
mimeType | string | No | the MIME type of the codec (e.g.: video/vp8)
clockRate | long | No | The negotiated clock rate the RTP timestamp is generated of
sdpFmtpLine | string | No | The a=fmtp line in the SDP corresponding to the codec

## MediaTrackReport
---


A General Flat merged Media Track Report for in-, outbound video and audio tracks


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The unique identifier of the service
mediaUnitId | string | Yes | The media unit id the report belongs to
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
callId | string | Yes | The generated unique identifier of the call
clientId | string | Yes | The generated unique identifier of the client
peerConnectionId | string | Yes | The unique identifier of the peer connection
sampleSeq | int | Yes | The sequence number of the sample the report is generated from
ssrc | long | Yes | The RTP SSRC field
marker | string | No | The marker the originated sample is reported with
roomId | string | No | webrtc app provided room id
userId | string | No | webrtc app provided user identifier
label | string | No | The webrtc app provided label the peer connection is labeled with
trackId | string | No | The id of the track
rtpStreamId | string | No | The id of the RTP stream connected to a remote media unit (such as an SFU)
remoteTrackId | string | No | Only For Inbound Media Track Reports<br />The id of the remote track this inbound track is originated from
remoteUserId | string | No | Only For Inbound Media Track Reports<br />The webrtc app provided user id the track belongs to, or if the webrtc app did not provided the observer tried to match it
remoteClientId | string | No | Only For Inbound Media Track Reports<br />The observer matched remote client Id
remotePeerConnectionId | string | No | Only For Inbound Media Track Reports<br />The observer matched remote Peer Connection Id
packetsReceived | int | No | The total number of packets received on the corresponded synchronization source
packetsLost | int | No | The total number of bytes received on the corresponded synchronization source
jitter | double | No | The corresponded synchronization source reported jitter
packetsDiscarded | int | No | The total number of packets missed the playout point and therefore discarded by the jitterbuffer
packetsRepaired | int | No | The total number of packets repaired by either FEC or due to retransmission on the corresponded synchronization source
burstPacketsLost | int | No | The total number of packets lost in burst (RFC6958)
burstPacketsDiscarded | int | No | The total number of packets discarded in burst (RFC6958)
burstLossCount | int | No | The total number of burst happened causes burstPacketsLost on the corresponding synchronization source
burstDiscardCount | int | No | The total number of burst happened causes burstPacketsDiscarded on the corresponding synchronization source
burstLossRate | double | No | The fraction of RTP packets lost during bursts proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
burstDiscardRate | double | No | The fraction of RTP packets discarded during bursts proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
gapLossRate | double | No | The fraction of RTP packets lost during gap proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
gapDiscardRate | double | No | The fraction of RTP packets discarded during gap proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
voiceActivityFlag | boolean | No | Only For Audio Reports<br />Indicate if the last RTP packet received contained voice activity based on the presence of the V bit in the extension header
lastPacketReceivedTimestamp | boolean | No | Only For Inbound Media Track Reports<br />Represents the timestamp at which the last packet was received on the corresponded synchronization source (ssrc)
averageRtcpInterval | double | No | The average RTCP interval between two consecutive compound RTCP packets sent for the corresponding synchronization source (ssrc)
headerBytesReceived | long | No | Only For Inbound Media Track Reports<br />Total number of RTP header and padding bytes received over the corresponding synchronization source (ssrc)
fecPacketsReceived | int | No | Only For Inbound Media Track Reports<br />Total number of FEC packets received over the corresponding synchronization source (ssrc)
fecPacketsDiscarded | int | No | Only For Inbound Media Track Reports<br />Total number of FEC packets discarded over the corresponding synchronization source (ssrc) due to 1) late arrive; 2) the target RTP packet has already been repaired.
bytesReceived | long | No | Only For Inbound Media Track Reports<br />Total number of bytes received over the corresponding synchronization source (ssrc) due to 1) late arrive; 2) the target RTP packet has already been repaired.
packetsFailedDecryption | int | No | Only For Inbound Media Track Reports<br />Total number of packets received and failed to decrypt over the corresponding synchronization source (ssrc) due to 1) late arrive; 2) the target RTP packet has already been repaired.
packetsDuplicated | int | No | Only For Inbound Media Track Reports<br />Total number of packets identified as duplicated over the corresponding synchronization source (ssrc).
perDscpPacketsReceived | double | No | Only For Inbound Media Track Reports<br />The total number of DSCP flagged RTP packets received over the corresponding synchronization source (ssrc)
nackCount | int | No | Count the total number of Negative ACKnowledgement (NACK) packets sent and belongs to the corresponded synchronization source (ssrc)
totalProcessingDelay | double | No | Only For Inbound Media Track Reports<br />The total processing delay in seconds spend on buffering RTP packets from received up until packets are decoded
estimatedPlayoutTimestamp | double | No | Only For Inbound Media Track Reports<br />The estimated playout time of the corresponded synchronization source
jitterBufferDelay | double | No | Only For Inbound Media Track Reports<br />The total time of RTP packets spent in jitterbuffer waiting for frame completion due to network uncertenity.
jitterBufferEmittedCount | int | No | Only For Inbound Media Track Reports<br />The total number of audio samples or video frames that have come out of the jitter buffer on the corresponded synchronization source (ssrc)
decoderImplementation | string | No | Only For Inbound Media Track Reports<br />Indicate the name of the decoder implementation library
packetsSent | int | No | Total number of RTP packets sent at the remote endpoint to this endpoint on this synchronization source
bytesSent | long | No | Total number of payload bytes sent at the remote endpoint to this endpoint on this synchronization source
remoteTimestamp | double | No | Only For Inbound Media Track Reports<br />The timestamp corresnponds to the time in UTC Epoch the remote endpoint reported the statistics belong to the sender side and correspond to the synchronization source (ssrc)
reportsSent | int | No | Only For Inbound Media Track Reports<br />The number of SR reports the remote endpoint sent corresponded to synchronization source (ssrc) this report belongs to
ended | boolean | No | Flag represents if the receiver ended the media stream track or not.
payloadType | int | No | The type of the payload the RTP packet SSRC belongs to
mimeType | string | No | the MIME type of the codec (e.g.: video/vp8)
clockRate | long | No | The negotiated clock rate the RTP timestamp is generated of
channels | int | No | The number of channels for audio is used (in stereo it is 2, otherwise it is most likely null)
sdpFmtpLine | string | No | The a=fmtp line in the SDP corresponding to the codec
framesDropped | int | No | Only For Video Reports<br />The total number of frames dropped at decoding process on the corresponding synchronization source
partialFramesLost | double | No | Only For Video Reports<br />The total number of partial frames lost at decoding process on the corresponding synchronization source
fullFramesLost | int | No | Only For Video Reports<br />The total number of full frames lost at decoding process on the corresponding synchronization source
framesDecoded | int | No | Only For Video Reports<br />Only For Inbound Media Track Reports<br />Indicate the number of frames completly and without error decoded on the corresponded synchronization source (ssrc)
keyFramesDecoded | int | No | Only For Video Reports<br />Only For Inbound Media Track Reports<br />Indicate the number of keyframes received on the corresponded synchronization source (ssrc)
frameWidth | int | No | Only For Video Reports<br />Indicate the width of the frame received on the corresponded synchronization source (ssrc)
frameHeight | int | No | Only For Video Reports<br />Indicate the height of the frame received on the corresponded synchronization source (ssrc)
frameBitDepth | int | No | Only For Video Reports<br />Indicate the bit depth per pixel of the last decoded frame received on the corresponded synchronization source (ssrc)
framesPerSecond | double | No | Only For Video Reports<br />Indicate the number of decoded frames in the last second received on the corresponded synchronization source (ssrc)
qpSum | long | No | Only For Video Reports<br />sum of QP values of frames decoded on the corresponded synchronization source (ssrc)
totalDecodeTime | long | No | Only For Video Reports<br />Only For Inbound Media Track Reports<br />The total number of seconds spent on decoding frames on the corresponded synchronization source (ssrc)
totalInterFrameDelay | long | No | Only For Video Reports<br />Only For Inbound Media Track Reports<br />The total number of inter frame delay on the corresponded synchronization source (ssrc)
totalSquaredInterFrameDelay | long | No | Only For Video Reports<br />Only For Inbound Media Track Reports<br />The total number of inter frame delay squere on the corresponded synchronization source (ssrc) Useful for variance calculation for interframe delays
firCount | int | No | Only For Video Reports<br />Count the total number of Full Intra Request sent by this receiver and belongs to the corresponded synchronization source (ssrc)
pliCount | int | No | Only For Video Reports<br />Count the total number of Picture Loss Indication sent by this receiver and belongs to the corresponded synchronization source (ssrc)
sliCount | int | No | Only For Video Reports<br />Count the total number of Slice Loss Indication sent by this receiver and belongs to the corresponded synchronization source (ssrc)
framesReceived | int | No | Only For Video Reports<br />Only For Inbound Media Track Reports<br />Represents the total number of complete frames received on the corresponded synchronization source (ssrc)
rid | string | No | Only For Outbound Media Track Reports<br /> The rid encoding parameter of the corresponded synchronization source
lastPacketSentTimestamp | long | No | Only For Outbound Media Track Reports<br /> the timestamp the last packet was sent. (UTC epoch in ms)
headerBytesSent | long | No | Only For Outbound Media Track Reports<br />Total number of RTP header and padding bytes sent over the corresponding synchronization source (ssrc)
packetsDiscardedOnSend | int | No | Only For Outbound Media Track Reports<br />Total number of RTP packets discarded at sender side over the corresponding synchronization source (ssrc)
bytesDiscardedOnSend | long | No | Only For Outbound Media Track Reports<br />Total number of RTP bytes discarded at sender side over the corresponding synchronization source (ssrc)
fecPacketsSent | int | No | Only For Outbound Media Track Reports<br />Total number of FEC packets sent over the corresponding synchronization source (ssrc)
retransmittedPacketsSent | int | No | Only For Outbound Media Track Reports<br />Total number of retransmitted packets sent over the corresponding synchronization source (ssrc).
retransmittedBytesSent | long | No | Only For Outbound Media Track Reports<br />Total number of retransmitted bytes sent over the corresponding synchronization source (ssrc).
targetBitrate | long | No | Only For Outbound Media Track Reports<br />Reflects the current encoder target in bits per second.
totalEncodedBytesTarget | long | No | Only For Outbound Media Track Reports<br />The total number of bytes of RTP coherent frames encoded completly depending on the frame size the encoder targets
totalSamplesSent | int | No | Only For Audio Reports<br />Only For Outbound Media Track Reports<br />The total number of samples sent over the corresponding synchronization source
samplesEncodedWithSilk | int | No | Only For Audio Reports<br />Only For Outbound Media Track Reports<br />The total number of samples encoded by SILK portion in opus sent over the corresponding synchronization source
samplesEncodedWithCelt | int | No | Only For Audio Reports<br />Only For Outbound Media Track Reports<br />The total number of samples encoded by CELT portion in opus sent over the corresponding synchronization source
totalPacketSendDelay | double | No | Only For Outbound Media Track Reports<br />The total number of delay packets buffered at the sender side in seconds over the corresponding synchronization source
perDscpPacketsSent | double | No | Only For Outbound Media Track Reports<br />The total number of DSCP flagged RTP packets sent over the corresponding synchronization source (ssrc)
encoderImplementation | string | No | Only For Outbound Media Track Reports<br />Indicate the name of the encoder implementation library
roundTripTime | double | No | Only For Outbound Media Track Reports<br />RTT measurement in seconds based on (most likely) SR, and RR belongs to the corresponded synchronization source
totalRoundTripTime | double | No | Only For Outbound Media Track Reports<br />The sum of RTT measurements belongs to the corresponded synchronization source
fractionLost | double | No | Only For Outbound Media Track Reports<br />The receiver reported fractional lost belongs to the corresponded synchronization source
reportsReceived | int | No | Only For Outbound Media Track Reports<br />The total number of RR reports received, which is the base of the remote inbound calculation on this source
roundTripTimeMeasurements | int | No | Only For Outbound Media Track Reports<br />The total number of calculated RR measurements received on this source
relayedSource | boolean | No | Only For Outbound Media Track Reports<br />True if the corresponded media source is remote, false otherwise (or null depending on browser and version)
audioLevel | double | No | Only For Audio Reports<br />Only For Outbound Media Track Reports<br />Represents the audio level reported by the media source
totalAudioEnergy | double | No | Only For Audio Reports<br />Only For Outbound Media Track Reports<br />Represents the energy level reported by the media source
totalSamplesDuration | double | No | Only For Audio Reports<br />Only For Outbound Media Track Reports<br />Represents the total duration of the audio samples the media source actually transconverted in seconds
echoReturnLoss | double | No | Only For Audio Reports<br />Only For Outbound Media Track Reports<br />Represents the echo cancellation in decibels corresponded to the media source.
echoReturnLossEnhancement | double | No | Only For Audio Reports<br />Only For Outbound Media Track Reports<br />Represents the echo cancellation in decibels added as a postprocessing by the library after the audio is catched from the emdia source.
framesSent | int | No | Only For Video Reports<br />Only For Outbound Media Track Reports<br />The number of frames sent over the corresponded synchronization source
hugeFramesSent | int | No | Only For Video Reports<br />Only For Outbound Media Track Reports<br />The number of huge frames (2.5x greater than the average size of frame) sent over the corresponded synchronization source
framesEncoded | int | No | Only For Video Reports<br />Only For Outbound Media Track Reports<br />The number of frames encoded over the corresponded synchronization source
keyFramesEncoded | int | No | Only For Video Reports<br />Only For Outbound Media Track Reports<br />The number of keyframes sent over the corresponded synchronization source
framesDiscardedOnSend | int | No | Only For Video Reports<br />Only For Outbound Media Track Reports<br />The number of frames discarded before sending over the corresponded synchronization source
totalEncodeTime | double | No | Only For Video Reports<br />Only For Outbound Media Track Reports<br />The sum of encoding time spent by the encoder corresponded to the synchronization source
qualityLimitationDurationCPU | double | No | Only For Video Reports<br />Only For Outbound Media Track Reports<br />Time elapsed in seconds when the the corresponding synchronization source (ssrc) was in a limited state due to CPU
qualityLimitationDurationNone | double | No | Only For Video Reports<br />Only For Outbound Media Track Reports<br />Time elapsed in seconds when the the corresponding synchronization source (ssrc) was not in a limited state
qualityLimitationDurationBandwidth | double | No | Only For Video Reports<br />Only For Outbound Media Track Reports<br />Time elapsed in seconds when the the corresponding synchronization source (ssrc) was in a limited state becasue of bandwidth
qualityLimitationDurationOther | double | No | Only For Video Reports<br />Only For Outbound Media Track Reports<br />Time elapsed in seconds when the the corresponding synchronization source (ssrc) was in a limited state becaue of other factor
qualityLimitationReason | string | No | Only For Video Reports<br />Only For Outbound Media Track Reports<br />Indicate a reason for the corresponding synchronization source (ssrc) quality is limited
qualityLimitationResolutionChanges | int | No | Only For Video Reports<br />Only For Outbound Media Track Reports<br />The number of quality limiatation changes happened for the corresponding synchronization source (ssrc)
encodedFrameWidth | int | No | Only For Video Reports<br />Only For Outbound Media Track Reports<br />Indicate the encoded width of the frame received on the corresponded synchronization source (ssrc)
encodedFrameHeight | int | No | Only For Video Reports<br />Only For Outbound Media Track Reports<br />Indicate the encoded height of the frame received on the corresponded synchronization source (ssrc)
encodedFrameBitDepth | int | No | Only For Video Reports<br />Only For Outbound Media Track Reports<br />Indicate the encoded bit depth per pixel of the last decoded frame received on the corresponded synchronization source (ssrc)
encodedFramesPerSecond | double | No | Only For Video Reports<br />Only For Outbound Media Track Reports<br />Indicate the encoded number of decoded frames in the last second received on the corresponded synchronization source (ssrc)

## ObserverEventReport
---


A report created for observer generated events


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The unique identifier of the service
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
callId | string | Yes | The generated unique identifier of the call
name | string | Yes | The name of the event
mediaUnitId | string | No | The media unit id the report belongs to
marker | string | No | The marker the originated sample is reported with
roomId | string | No | webrtc app provided room id
clientId | string | No | The generated unique identifier of the client
userId | string | No | webrtc app provided user identifier
peerConnectionId | string | No | The unique identifier of the peer connection
sampleTimestamp | long | No | The timestamp of the sample the event related to
sampleSeq | int | No | The sequence number of the sample the event may related to
message | string | No | the human readable message of the event
value | string | No | the value of the event
attachments | string | No | attachment the event may created with

## OutboundAudioTrackReport
---


A Report created for Outbound Audio Tracks. A combination of Audio source, Codec metadata carrying outbound and remote inbound RTP stat measurements


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The unique identifier of the service
mediaUnitId | string | Yes | The media unit id the report belongs to
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
callId | string | Yes | The generated unique identifier of the call
clientId | string | Yes | The generated unique identifier of the client
peerConnectionId | string | Yes | The unique identifier of the peer connection
sampleSeq | int | Yes | The sequence number of the sample the report is generated from
ssrc | long | Yes | The RTP SSRC field
marker | string | No | The marker the originated sample is reported with
roomId | string | No | webrtc app provided room id
userId | string | No | webrtc app provided user identifier
label | string | No | The webrtc app provided label the peer connection is labeled with
trackId | string | No | The id of the track
rtpStreamId | string | No | The id of the RTP stream connected to a remote media unit (such as an SFU)
packetsSent | int | No | The total number of packets sent on the corresponded synchronization source
bytesSent | long | No | The total number of bytes sent on the corresponded synchronization source
rid | string | No |  The rid encoding parameter of the corresponded synchronization source
lastPacketSentTimestamp | long | No |  the timestamp the last packet was sent. (UTC epoch in ms)
headerBytesSent | long | No | Total number of RTP header and padding bytes sent over the corresponding synchronization source (ssrc)
packetsDiscardedOnSend | int | No | Total number of RTP packets discarded at sender side over the corresponding synchronization source (ssrc)
bytesDiscardedOnSend | long | No | Total number of RTP bytes discarded at sender side over the corresponding synchronization source (ssrc)
fecPacketsSent | int | No | Total number of FEC packets sent over the corresponding synchronization source (ssrc)
retransmittedPacketsSent | int | No | Total number of retransmitted packets sent over the corresponding synchronization source (ssrc).
retransmittedBytesSent | long | No | Total number of retransmitted bytes sent over the corresponding synchronization source (ssrc).
targetBitrate | long | No | Reflects the current encoder target in bits per second.
totalEncodedBytesTarget | long | No | The total number of bytes of RTP coherent frames encoded completly depending on the frame size the encoder targets
totalSamplesSent | int | No | The total number of samples sent over the corresponding synchronization source
samplesEncodedWithSilk | int | No | The total number of samples encoded by SILK portion in opus sent over the corresponding synchronization source
samplesEncodedWithCelt | int | No | The total number of samples encoded by CELT portion in opus sent over the corresponding synchronization source
voiceActivityFlag | boolean | No | Indicate if the last RTP packet sent contained voice activity based on the presence of the V bit in the extension header
totalPacketSendDelay | double | No | The total number of delay packets buffered at the sender side in seconds over the corresponding synchronization source
averageRtcpInterval | double | No | The average RTCP interval between two consecutive compound RTCP packets sent for the corresponding synchronization source (ssrc)
perDscpPacketsSent | double | No | The total number of DSCP flagged RTP packets sent over the corresponding synchronization source (ssrc)
nackCount | int | No | Count the total number of Negative ACKnowledgement (NACK) packets received over the corresponding synchronization source (ssrc)
encoderImplementation | string | No | Indicate the name of the encoder implementation library
packetsReceived | int | No | The total number of packets received on the corresponded synchronization source
packetsLost | int | No | The total number of bytes received on the corresponded synchronization source
jitter | double | No | The corresponded synchronization source reported jitter
packetsDiscarded | int | No | The total number of packets missed the playout point and therefore discarded by the jitterbuffer
packetsRepaired | int | No | The total number of packets repaired by either FEC or due to retransmission on the corresponded synchronization source
burstPacketsLost | int | No | The total number of packets lost in burst (RFC6958)
burstPacketsDiscarded | int | No | The total number of packets discarded in burst (RFC6958)
burstLossCount | int | No | The total number of burst happened causes burstPacketsLost on the corresponding synchronization source
burstDiscardCount | int | No | The total number of burst happened causes burstPacketsDiscarded on the corresponding synchronization source
burstLossRate | double | No | The fraction of RTP packets lost during bursts proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
burstDiscardRate | double | No | The fraction of RTP packets discarded during bursts proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
gapLossRate | double | No | The fraction of RTP packets lost during gap proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
gapDiscardRate | double | No | The fraction of RTP packets discarded during gap proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
roundTripTime | double | No | RTT measurement in seconds based on (most likely) SR, and RR belongs to the corresponded synchronization source
totalRoundTripTime | double | No | The sum of RTT measurements belongs to the corresponded synchronization source
fractionLost | double | No | The receiver reported fractional lost belongs to the corresponded synchronization source
reportsReceived | int | No | The total number of RR reports received, which is the base of the remote inbound calculation on this source
roundTripTimeMeasurements | int | No | The total number of calculated RR measurements received on this source
relayedSource | boolean | No | True if the corresponded media source is remote, false otherwise (or null depending on browser and version)
audioLevel | double | No | Represents the audio level reported by the media source
totalAudioEnergy | double | No | Represents the energy level reported by the media source
totalSamplesDuration | double | No | Represents the total duration of the audio samples the media source actually transconverted in seconds
echoReturnLoss | double | No | Represents the echo cancellation in decibels corresponded to the media source.
echoReturnLossEnhancement | double | No | Represents the echo cancellation in decibels added as a postprocessing by the library after the audio is catched from the emdia source.
ended | boolean | No | Flag represents if the sender ended the media stream track or not.
payloadType | int | No | The type of the payload the RTP packet SSRC belongs to
mimeType | string | No | the MIME type of the codec (e.g.: video/vp8)
clockRate | long | No | The negotiated clock rate the RTP timestamp is generated of
channels | int | No | The number of channels for audio is used (in stereo it is 2, otherwise it is most likely null)
sdpFmtpLine | string | No | The a=fmtp line in the SDP corresponding to the codec

## OutboundVideoTrackReport
---


A Report created for Outbound Video Tracks. A combination of Video source, Codec metadata carrying outbound and remote inbound RTP stat measurements


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The unique identifier of the service
mediaUnitId | string | Yes | The media unit id the report belongs to
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
callId | string | Yes | The generated unique identifier of the call
clientId | string | Yes | The generated unique identifier of the client
peerConnectionId | string | Yes | The unique identifier of the peer connection
sampleSeq | int | Yes | The sequence number of the sample the report is generated from
ssrc | long | Yes | The RTP SSRC field
marker | string | No | The marker the originated sample is reported with
roomId | string | No | webrtc app provided room id
userId | string | No | webrtc app provided user identifier
label | string | No | The webrtc app provided label the peer connection is labeled with
trackId | string | No | The id of the track
rtpStreamId | string | No | The id of the RTP stream connected to a remote media unit (such as an SFU)
packetsSent | int | No | The total number of packets sent on the corresponded synchronization source
bytesSent | long | No | The total number of bytes sent on the corresponded synchronization source
rid | string | No |  The rid encoding parameter of the corresponded synchronization source
lastPacketSentTimestamp | long | No |  the timestamp the last packet was sent. (UTC epoch in ms)
headerBytesSent | long | No | Total number of RTP header and padding bytes sent over the corresponding synchronization source (ssrc)
packetsDiscardedOnSend | int | No | Total number of RTP packets discarded at sender side over the corresponding synchronization source (ssrc)
bytesDiscardedOnSend | long | No | Total number of RTP bytes discarded at sender side over the corresponding synchronization source (ssrc)
fecPacketsSent | int | No | Total number of FEC packets sent over the corresponding synchronization source (ssrc)
retransmittedPacketsSent | int | No | Total number of retransmitted packets sent over the corresponding synchronization source (ssrc).
retransmittedBytesSent | long | No | Total number of retransmitted bytes sent over the corresponded synchronization source (ssrc).
targetBitrate | long | No | Reflects the current encoder target in bits per second.
totalEncodedBytesTarget | long | No | The total number of bytes of RTP coherent frames encoded completly depending on the frame size the encoder targets
frameWidth | int | No | Represents the height of the last encoded frame sent over the corresponded synchronization source
frameHeight | int | No | Represents the width of the last encoded frame sent over the corresponded synchronization source
frameBitDepth | int | No | Represents the bit depth per pixel of the last encoded frame sent over the corresponded synchronization source
framesPerSecond | double | No | The number of encoded frames over the last second sent over the corresponded synchronization source
framesSent | int | No | The number of frames sent over the corresponded synchronization source
hugeFramesSent | int | No | The number of huge frames (2.5x greater than the average size of frame) sent over the corresponded synchronization source
framesEncoded | int | No | The number of frames encoded over the corresponded synchronization source
keyFramesEncoded | int | No | The number of keyframes sent over the corresponded synchronization source
framesDiscardedOnSend | int | No | The number of frames discarded before sending over the corresponded synchronization source
qpSum | long | No | The sum of QP values encoded by the encoder corresponded to the synchronization source
totalEncodeTime | double | No | The sum of encoding time spent by the encoder corresponded to the synchronization source
totalPacketSendDelay | double | No | The total number of delay packets buffered at the sender side in seconds over the corresponding synchronization source
averageRtcpInterval | double | No | The average RTCP interval between two consecutive compound RTCP packets sent for the corresponding synchronization source (ssrc)
qualityLimitationDurationCPU | double | No | Time elapsed in seconds when the the corresponding synchronization source (ssrc) was in a limited state due to CPU
qualityLimitationDurationNone | double | No | Time elapsed in seconds when the the corresponding synchronization source (ssrc) was not in a limited state
qualityLimitationDurationBandwidth | double | No | Time elapsed in seconds when the the corresponding synchronization source (ssrc) was in a limited state becasue of bandwidth
qualityLimitationDurationOther | double | No | Time elapsed in seconds when the the corresponding synchronization source (ssrc) was in a limited state becaue of other factor
qualityLimitationReason | string | No | Indicate a reason for the corresponding synchronization source (ssrc) quality is limited
qualityLimitationResolutionChanges | int | No | The number of quality limiatation changes happened for the corresponding synchronization source (ssrc)
perDscpPacketsSent | double | No | The total number of DSCP flagged RTP packets sent over the corresponding synchronization source (ssrc)
nackCount | int | No | Count the total number of Negative ACKnowledgement (NACK) packets received over the corresponding synchronization source (ssrc)
firCount | int | No | The number of full inter requests happened over the corresponding synchronization source (ssrc)
pliCount | int | No | The number of picture loss indication happened received over the corresponding synchronization source (ssrc)
sliCount | int | No | The number of slice loss indication happened over the corresponding synchronization source (ssrc)
encoderImplementation | string | No | Indicate the name of the encoder implementation library
packetsReceived | int | No | The total number of packets received on the corresponded synchronization source
packetsLost | int | No | The total number of bytes received on the corresponded synchronization source
jitter | double | No | The corresponded synchronization source reported jitter
packetsDiscarded | int | No | The total number of packets missed the playout point and therefore discarded by the jitterbuffer
packetsRepaired | int | No | The total number of packets repaired by either FEC or due to retransmission on the corresponded synchronization source
burstPacketsLost | int | No | The total number of packets lost in burst (RFC6958)
burstPacketsDiscarded | int | No | The total number of packets discarded in burst (RFC6958)
burstLossCount | int | No | The total number of burst happened causes burstPacketsLost on the corresponding synchronization source
burstDiscardCount | int | No | The total number of burst happened causes burstPacketsDiscarded on the corresponding synchronization source
burstLossRate | double | No | The fraction of RTP packets lost during bursts proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
burstDiscardRate | double | No | The fraction of RTP packets discarded during bursts proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
gapLossRate | double | No | The fraction of RTP packets lost during gap proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
gapDiscardRate | double | No | The fraction of RTP packets discarded during gap proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
framesDropped | int | No | The number of frames dropped over the corresponded synchronization source
partialFramesLost | int | No | The number of partial frames lost over the corresponded synchronization source
fullFramesLost | int | No | The number of full frames lost over the corresponded synchronization source
roundTripTime | double | No | RTT measurement in seconds based on (most likely) SR, and RR belongs to the corresponded synchronization source
totalRoundTripTime | double | No | The sum of RTT measurements belongs to the corresponded synchronization source
fractionLost | double | No | The receiver reported fractional lost belongs to the corresponded synchronization source
reportsReceived | int | No | The total number of RR reports received, which is the base of the remote inbound calculation on this source
roundTripTimeMeasurements | int | No | The total number of calculated RR measurements received on this source
relayedSource | boolean | No | True if the corresponded media source is remote, false otherwise (or null depending on browser and version)
encodedFrameWidth | int | No | Indicate the encoded width of the frame received on the corresponded synchronization source (ssrc)
encodedFrameHeight | int | No | Indicate the encoded height of the frame received on the corresponded synchronization source (ssrc)
encodedFrameBitDepth | int | No | Indicate the encoded bit depth per pixel of the last decoded frame received on the corresponded synchronization source (ssrc)
encodedFramesPerSecond | double | No | Indicate the encoded number of decoded frames in the last second received on the corresponded synchronization source (ssrc)
ended | boolean | No | Flag represents if the sender ended the media stream track or not.
payloadType | int | No | The type of the payload the RTP packet SSRC belongs to
mimeType | string | No | the MIME type of the codec (e.g.: video/vp8)
clockRate | long | No | The negotiated clock rate the RTP timestamp is generated of
channels | int | No | The number of channels for audio is used (in stereo it is 2, otherwise it is most likely null)
sdpFmtpLine | string | No | The a=fmtp line in the SDP corresponding to the codec

## Report
---


A multiplexed Report object wraps an encoded report in bytes format


Field | Type | Required | Description 
--- | --- | --- | ---
type | string | Yes | The type of the report
payload | bytes | Yes | The payload of contans the actual report

## SfuEventReport
---


Events happened in calls.


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The service id the report belongs to
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
name | string | Yes | The name of the event. Possible values are: SFU_JOINED, SFU_LEFT, SFU_TRANSPORT_OPENED, SFU_TRANSPORT_CLOSED, SFU_RTP_STREAM_ADDED, SFU_RTP_STREAM_REMOVED
mediaUnitId | string | No | The media unit id the report belongs to
marker | string | No | The marker the originated sample is reported with
sfuId | string | No | The generated unique identifier of the SFU
callId | string | No | The callId the event belongs to
transportId | string | No | SFU provided transport identifier
rtpStreamId | string | No | Unique identifier of the RTP stream the event is related to
sctpStreamId | string | No | Unique identifier of the SCTP stream the event is related to
sfuPadId | string | No | Unique identifier of the Sfu Pad the event is related to
SSRC | long | No | The SSRC identifier of the RTP stream related to
message | string | No | the human readable message of the event
value | string | No | the value of the event
attachments | string | No | attachment the event may created with

## SfuInboundRtpPadReport
---


A Report created for RTP streams going through the SFU


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The service id the report belongs to
mediaUnitId | string | Yes | The media unit id the report belongs to
sfuId | string | Yes | The provided unique identifier of the SFU
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
transportId | string | Yes | The id of the transport the RTP stream uses.
rtpStreamId | string | Yes | The id of the RTP stream.
padId | string | Yes | The id of Sfu pad.
ssrc | long | Yes | The synchronization source id of the RTP stream
marker | string | No | The marker the originated sample is reported with
trackId | string | No | The id of the track the RTP stream related to at the client side
clientId | string | No | If the track id was provided by the Sfu, the observer can fill up the information of which client it belongs to
callId | string | No | The callId the event belongs to
mediaType | string | No | the type of the media the stream carries ("audio" or "video")
payloadType | int | No | The payload type field of the RTP header
mimeType | string | No | The negotiated mimeType in the SDP
clockRate | long | No | The clock rate of the media source the RTP header carries
sdpFmtpLine | string | No | The actual SDP line from the negotiation related to this RTP stream
rid | string | No |  The rid parameter of the corresponded RTP stream
rtxSsrc | long | No | If RTX is negotiated as a separate stream, this is the SSRC of the RTX stream that is associated with this stream's ssrc. 
targetBitrate | long | No | he bitrate the corresponded stream targets.
voiceActivityFlag | boolean | No | The RTP header V flag indicate of the activity of the media source by the media codec if the RTP transport ships it through
firCount | int | No | The total number FIR packets sent from this endpoint to the source on the corresponded RTP stream. Only for Video streams
pliCount | int | No | The total number of Picture Loss Indication sent on the corresponded RTP stream. Only for Video streams
nackCount | int | No | The total number of negative acknowledgement received on the corresponded RTP stream.
sliCount | int | No | The total number of SLI indicator sent from the endpoint on the corresponded RTP stream. Only for Audio stream
packetsLost | int | No | The total number of packets lost on the corresponded RTP stream.
packetsReceived | int | No | The total number of packets received on the corresponded RTP stream.
packetsDiscarded | int | No | The total number of discarded packets on the corresponded RTP stream.
packetsRepaired | int | No | The total number of packets repaired by either retransmission or FEC on the corresponded RTP stream.
packetsFailedDecryption | int | No | The total number of packets failed to be decrypted on the corresponded RTP stream.
packetsDuplicated | int | No | The total number of duplicated packets appeared on the corresponded RTP stream.
fecPacketsReceived | int | No | The total number of FEC packets received on the corresponded RTP stream.
fecPacketsDiscarded | int | No | The total number of FEC packets discarded on the corresponded RTP stream.
bytesReceived | long | No | The total amount of payload bytes received on the corresponded RTP stream.
rtcpSrReceived | int | No | The total number of SR reports received by the corresponded RTP stream
rtcpRrSent | int | No | The total number of RR reports sent on the corresponded RTP stream
rtxPacketsReceived | int | No | If rtx packets are sent or received on the same stream then this number indicates how may has been sent
rtxPacketsDiscarded | int | No | If rtx packets are received on the same stream then this number indicates how may has been discarded
framesReceived | int | No | The number of frames received on the corresponded RTP stream
framesDecoded | int | No | Indicate the number of frames the Sfu has been decoded
keyFramesDecoded | int | No | Indicate the number of keyframes the Sfu has been decoded
fractionLost | double | No | The calculated fractionLost of the stream
jitter | double | No | The calculated jitter of the stream
roundTripTime | double | No | The calculated RTT of the stream
attachments | string | No | Arbitrary attachments holds relevant information about the stream.

## SfuMetaReport
---


Metadata belongs to SFUs


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The service id the report belongs to
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
mediaUnitId | string | No | The media unit id the report belongs to
marker | string | No | The marker the originated sample is reported with
sfuId | string | No | The id of the Sfu
callId | string | No | The callId the event belongs to
clientId | string | No | The generated unique identifier of the client
peerConnectionId | string | No | The unique identifier of the peer connection
type | string | No | The type of the meta data reported for the peer connection
payload | string | No | The payload for the metadata reported for the peeer connection

## SfuOutboundRtpPadReport
---


A Report created for RTP streams going through the SFU


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The service id the report belongs to
mediaUnitId | string | Yes | The media unit id the report belongs to
sfuId | string | Yes | The provided unique identifier of the SFU
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
transportId | string | Yes | The id of the transport the RTP stream uses.
rtpStreamId | string | Yes | The id of the RTP stream.
padId | string | Yes | The id of Sfu pad.
ssrc | long | Yes | The synchronization source id of the RTP stream
marker | string | No | The marker the originated sample is reported with
callId | string | No | The callId the event belongs to
clientId | string | No | If the track id was provided by the Sfu, the observer can fill up the information of which client it belongs to
trackId | string | No | The id of the track the RTP stream related to at the client side
mediaType | string | No | the type of the media the stream carries ("audio" or "video")
payloadType | int | No | The payload type field of the RTP header
mimeType | string | No | The negotiated mimeType in the SDP
clockRate | long | No | The clock rate of the media source the RTP header carries
sdpFmtpLine | string | No | The actual SDP line from the negotiation related to this RTP stream
rid | string | No |  The rid parameter of the corresponded RTP stream
rtxSsrc | long | No | If RTX is negotiated as a separate stream, this is the SSRC of the RTX stream that is associated with this stream's ssrc. 
targetBitrate | long | No | he bitrate the corresponded stream targets.
voiceActivityFlag | boolean | No | The RTP header V flag indicate of the activity of the media source by the media codec if the RTP transport ships it through
firCount | int | No | The total number FIR packets sent from this endpoint to the source on the corresponded RTP stream. Only for Video streams
pliCount | int | No | The total number of Picture Loss Indication sent on the corresponded RTP stream. Only for Video streams
nackCount | int | No | The total number of negative acknowledgement received on the corresponded RTP stream.
sliCount | int | No | The total number of SLI indicator sent from the endpoint on the corresponded RTP stream. Only for Audio stream
packetsLost | int | No | The total number of packets lost on the corresponded RTP stream.
packetsSent | int | No | The total number of packets sent on the corresponded RTP stream.
packetsDiscarded | int | No | The total number of discarded packets on the corresponded RTP stream.
packetsRetransmitted | int | No | The total number of packets retransmitted on the corresponded RTP stream.
packetsFailedEncryption | int | No | The total number of packets failed to be encrypted on the corresponded RTP stream.
packetsDuplicated | int | No | The total number of duplicated packets appeared on the corresponded RTP stream.
fecPacketsSent | int | No | The total number of FEC packets sent on the corresponded RTP stream.
fecPacketsDiscarded | int | No | The total number of FEC packets discarded on the corresponded RTP stream.
bytesSent | long | No | The total amount of payload bytes sent on the corresponded RTP stream.
rtcpSrSent | int | No | The total number of SR reports sent by the corresponded RTP stream
rtcpRrReceived | int | No | The total number of RR reports received on the corresponded RTP stream
rtxPacketsSent | int | No | If rtx packets sent on the same stream then this number indicates how may has been sent
rtxPacketsDiscarded | int | No | If rtx packets are received on the same stream then this number indicates how may has been discarded
framesSent | int | No | The number of frames sent on the corresponded RTP stream
framesEncoded | int | No | Indicate the number of frames the Sfu has been encoded
keyFramesEncoded | int | No | Indicate the number of keyframes the Sfu has been encoded on the corresponded RTP stream
attachments | string | No | Arbitrary attachments holds relevant information about the stream.

## SfuSctpStreamReport
---


A Report created for SCTP streams going through the SFU


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The service id the report belongs to
mediaUnitId | string | Yes | The media unit id the report belongs to
sfuId | string | Yes | The provided unique identifier of the SFU
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
transportId | string | Yes | The id of the transport the RTP stream uses.
streamId | string | Yes | The id of the sctp stream
marker | string | No | The marker the originated sample is reported with
callId | string | No | The generated unique identifier of the call
roomId | string | No | webrtc app provided room id
label | string | No | The label of the sctp stream
protocol | string | No | The protocol used to establish an sctp stream
sctpSmoothedRoundTripTime | double | No | The latest smoothed round-trip time value, corresponding to spinfo_srtt defined in [RFC6458] but converted to seconds. If there has been no round-trip time measurements yet, this value is undefined.
sctpCongestionWindow | double | No | The latest congestion window, corresponding to spinfo_cwnd defined in [RFC6458].
sctpReceiverWindow | double | No | The latest receiver window, corresponding to sstat_rwnd defined in [RFC6458].
sctpMtu | int | No | The latest maximum transmission unit, corresponding to spinfo_mtu defined in [RFC6458].
sctpUnackData | int | No | The number of unacknowledged DATA chunks, corresponding to sstat_unackdata defined in [RFC6458].
messageReceived | int | No | The number of message received on the corresponded SCTP stream.
messageSent | int | No | The number of message sent on the corresponded SCTP stream.
bytesReceived | long | No | The number of bytes received on the corresponded SCTP stream.
bytesSent | long | No | The number of bytes sent on the corresponded SCTP stream.

## SFUTransportReport
---


A Report created for SFU Transport layer typically created to transfer RTP/SCTP/RTX streams to another client, SFU, MCU, or processing module.


Field | Type | Required | Description 
--- | --- | --- | ---
serviceId | string | Yes | The service id the report belongs to
mediaUnitId | string | Yes | The media unit id the report belongs to
sfuId | string | Yes | The provided unique identifier of the SFU
timestamp | long | Yes | The timestamp when the corresponded data is generated for the report (UTC Epoch in ms)
transportId | string | Yes | The generated unique identifier of the transport
marker | string | No | The marker the originated sample is reported with
callId | string | No | The generated unique identifier of the call
roomId | string | No | webrtc app provided room id
dtlsState | string | No | Represent the current value of the state attribute of the underlying RTCDtlsTransport.
iceState | string | No | Represent the current value of the state attribute of the underlying RTCIceTransport
sctpState | string | No | Represents the the current value of the SCTP state of the transport of the SFU
iceRole | string | No | Represent the current value of the role SFU takes place in ICE
localAddress | string | No | The local address of the ICE candidate selected for the transport (IPv4, IPv6, FQDN)
localPort | int | No | The local port number
protocol | string | No | The protocol used by the transport
remoteAddress | string | No | The remote address of the ICE candidate selected for the transport (IPv4, IPv6, FQDN)
remotePort | int | No | The remote port number
rtpBytesReceived | long | No | The total amount of RTP bytes received on this transport
rtpBytesSent | long | No | The total amount of RTP bytes sent on this transport
rtpPacketsReceived | int | No | The total amount of RTP packets received on this transport
rtpPacketsSent | int | No | The total amount of RTP packets sent on this transport
rtpPacketsLost | int | No | The total amount of RTP packets lost on this transport
rtxBytesReceived | long | No | The total amount of RTX bytes received on this transport
rtxBytesSent | long | No | The total amount of RTX bytes sent on this transport
rtxPacketsReceived | int | No | The total amount of RTX packets received on this transport
rtxPacketsSent | int | No | The total amount of RTX packets sent on this transport
rtxPacketsLost | int | No | The total amount of RTX packets lost on this transport
rtxPacketsDiscarded | int | No | The total amount of RTX packets discarded on this transport
sctpBytesReceived | long | No | The total amount of SCTP bytes received on this transport
sctpBytesSent | long | No | The total amount of SCTP bytes sent on this transport
sctpPacketsReceived | int | No | The total amount of SCTP packets received on this transport
sctpPacketsSent | int | No | The total amount of SCTP packets sent on this transport
