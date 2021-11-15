---
contributors: {'Balazs Kreith'}
title: "SFU Sample"
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
## SfuSample
---


A compound object holds a set of measurements belonging to a aspecific time


Field | Type | Required | Description 
--- | --- | --- | ---
sfuId | string | Yes | a Unique generated id for the sfu samples are originated from
timestamp | number | Yes | The timestamp when the sample is created
inboundRtpPads | array | No | array of measurements related to inbound RTP streams
outboundRtpPads | array | No | array of measurements related to outbound RTP streams
sctpStreams | array | No | array of measurements of SCTP streams
sfuTransports | array | No | array of measurements of SFU peer connection transports
timeZoneOffsetInHours | number | No | The client app running offsets from GMT in hours
marker | string | No | A sample marker indicate an additional information from the app




### SfuInboundRtpPad
---


Field | Type | Required | Description 
--- | --- | --- | ---
transportId | string | Yes | The id of the transport the stream belongs to
rtpStreamId | string | Yes | unique identifier for the stream
padId | string | Yes | id of the source pod
internal | boolean | No | Indicates if this transport is not receive or send traffic outside of the SFU mesh.
skipMeasurements | boolean | No | Indicate if this message measurements should be kept and oly used as keep alive message for the transports
outboundPadId | string | No | if the sink is internally piped between the SFUs, this id represents the remote SFU outbound pad id
ssrc | number | No | The SSRC identifier of the corresponded RTP stream
mediaType | string | No | The type of the media the stream carries
payloadType | number | No | The type of the payload the RTP stream carries
mimeType | string | No | The MIME type of the media codec
clockRate | number | No | the clock rate of the media source generates samples or frames
sdpFmtpLine | string | No | The corresponded SDP line in SDP negotiation
rid | string | No | The rid parameter of the corresponded RTP stream
rtxSsrc | number | No | If RTX is negotiated as a separate stream, this is the SSRC of the RTX stream that is associated with this stream's ssrc.
targetBitrate | number | No | The bitrate the corresponded stream targets to.
voiceActivityFlag | boolean | No | The RTP header V flag indicate of the activity of the media source by the media codec if the RTP transport ships it through
firCount | number | No | The total number FIR packets sent from this endpoint to the source on the corresponded RTP stream
pliCount | number | No | The total number of Picture Loss Indication sent on the corresponded RTP stream
nackCount | number | No | The total number of negative acknowledgement received on the corresponded RTP stream
sliCount | number | No | The total number of SLI indicator sent from the endpoint on the corresponded RTP stream
packetsLost | number | No | The total number of packets lost on the corresponded RTP stream
packetsReceived | number | No | The total number of packets received on the corresponded RTP stream,
packetsDiscarded | number | No | The total number of discarded packets on the corresponded RTP stream.
packetsRepaired | number | No | The total number of packets repaired by either retransmission or FEC on the corresponded RTP stream.
packetsFailedDecryption | number | No | The total number of packets failed to be decrypted on the corresponded RTP stream
packetsDuplicated | number | No | The total number of duplicated packets appeared on the corresponded RTP stream.
fecPacketsReceived | number | No | The total number of FEC packets received on the corresponded RTP stream.
fecPacketsDiscarded | number | No | The total number of FEC packets discarded on the corresponded RTP stream.
bytesReceived | number | No | The total amount of payload bytes received on the corresponded RTP stream
rtcpSrReceived | number | No | The total number of SR reports received by the remote endpoint on the corresponded RTP stream
rtcpRrSent | number | No | The total number of RR reports sent by the the local endpoint on the corresponded RTP stream
rtxPacketsReceived | number | No | If rtx packets are received on the same stream then this number indicates how may has been received
rtxPacketsDiscarded | number | No | If rtx packets are received on the same stream then this number indicates how may has been discarded
framesReceived | number | No | The number of frames received on the corresponded RTP stream
framesDecoded | number | No | Indicate the number of frames the Sfu has been decoded
keyFramesDecoded | number | No | Indicate the number of keyframes the Sfu has been decoded
fractionLost | number | No | The calculated fractionLost of the stream
jitter | number | No | The calculated jitter for the stream
roundTripTime | number | No | The calculated round trip time for the corresponded RTP stream
attachments | string | No | Arbitrary attachments holds relevant information about the stream


### SfuOutboundRtpPad
---


Field | Type | Required | Description 
--- | --- | --- | ---
transportId | string | Yes | The id of the transport the stream belongs to
rtpStreamId | string | Yes | unique identifier of the stream
padId | string | No | id of the sink pod
internal | boolean | No | Indicates if this transport is not receive or send traffic outside of the SFU mesh.
skipMeasurements | boolean | No | Indicate if this message measurements should be kept and oly used as keep alive message for the transports
ssrc | number | No | The SSRC identifier of the corresponded RTP stream
mediaType | string | No | The type of the media the stream carries
payloadType | number | No | The type of the payload the RTP stream carries
mimeType | string | No | The MIME type of the media codec
clockRate | number | No | the clock rate of the media source generates samples or frames
sdpFmtpLine | string | No | The corresponded SDP line in SDP negotiation
rid | string | No | The rid parameter of the corresponded RTP stream
rtxSsrc | number | No | If RTX is negotiated as a separate stream, this is the SSRC of the RTX stream that is associated with this stream's ssrc.
targetBitrate | number | No | The bitrate the corresponded stream targets to.
voiceActivityFlag | boolean | No | The RTP header V flag indicate of the activity of the media source by the media codec if the RTP transport ships it through
firCount | number | No | The total number FIR packets sent from this endpoint to the source on the corresponded RTP stream
pliCount | number | No | The total number of Picture Loss Indication sent on the corresponded RTP stream
nackCount | number | No | The total number of negative acknowledgement received on the corresponded RTP stream
sliCount | number | No | The total number of SLI indicator sent from the endpoint on the corresponded RTP stream
packetsSent | number | No | The total number of packets sent on the corresponded RTP stream,
packetsLost | number | No | The total number of packets lost on the corresponded RTP stream
packetsDiscarded | number | No | The total number of discarded packets on the corresponded RTP stream.
packetsRetransmitted | number | No | The total number of packets retransmitted on the corresponded RTP stream.
packetsFailedEncryption | number | No | The total number of packets failed to be encrypted on the corresponded RTP stream
packetsDuplicated | number | No | The total number of duplicated packets appeared on the corresponded RTP stream.
fecPacketsSent | number | No | The total number of FEC packets sent on the corresponded RTP stream.
fecPacketsDiscarded | number | No | The total number of FEC packets discarded on the corresponded RTP stream.
bytesSent | number | No | The total amount of payload bytes sent on the corresponded RTP stream
rtcpSrSent | number | No | The total number of SR reports sent to the remote endpoint on the corresponded RTP stream
rtcpRrReceived | number | No | The total number of RR reports received by the the local endpoint on the corresponded RTP stream
rtxPacketsSent | number | No | If rtx packets are sent on the same stream then this number indicates how may has been sent
rtxPacketsDiscarded | number | No | If rtx packets are received on the same stream then this number indicates how may has been discarded
framesSent | number | No | The number of frames sent on the corresponded RTP stream
framesEncoded | number | No | Indicate the number of frames the Sfu has been encoded
keyFramesEncoded | number | No | Indicate the number of keyframes the Sfu has been encoded on the corresponded RTP stream
attachments | string | No | Arbitrary attachments holds relevant information about the stream


### SctpStream
---


Field | Type | Required | Description 
--- | --- | --- | ---
transportId | string | Yes | The id of the transport the stream belongs to
streamId | string | Yes | The id of the sctp stream
label | string | No | The label of the sctp stream
protocol | string | No | The protocol used to establish an sctp stream
sctpSmoothedRoundTripTime | number | No | The latest smoothed round-trip time value, corresponding to spinfo_srtt defined in [RFC6458] but converted to seconds. If there has been no round-trip time measurements yet, this value is undefined.
sctpCongestionWindow | number | No | The latest congestion window, corresponding to spinfo_cwnd defined in [RFC6458].
sctpReceiverWindow | number | No | The latest receiver window, corresponding to sstat_rwnd defined in [RFC6458].
sctpMtu | number | No | The latest maximum transmission unit, corresponding to spinfo_mtu defined in [RFC6458].
sctpUnackData | number | No | The number of unacknowledged DATA chunks, corresponding to sstat_unackdata defined in [RFC6458].
messageReceived | number | No | The number of message received on the corresponded SCTP stream
messageSent | number | No | The number of message sent on the corresponded SCTP stream
bytesReceived | number | No | The number of bytes received on the corresponded SCTP stream
bytesSent | number | No | The number of bytes sent on the corresponded SCTP stream


### SfuTransport
---


Field | Type | Required | Description 
--- | --- | --- | ---
transportId | string | Yes | The identifier of the transport
internal | boolean | No | Indicates if this transport is not receive or send traffic outside of the SFU mesh.
skipMeasurements | boolean | No | Indicate if this message measurements should be kept and oly used as keep alive message for the transports
dtlsState | string | No | Set to the current value of the state attribute of the underlying RTCDtlsTransport.
iceState | string | No | Set to the current value of the state attribute of the underlying RTCIceTransport.
sctpState | string | No | The state of the SCTP for this transport
iceRole | string | No | Set to the current value of the role attribute of the underlying ICE role.
localAddress | string | No | The local address of the ICE candidate selected for the transport (IPv4, IPv6, FQDN)
localPort | number | No | The local port number
protocol | string | No | The protocol used by the transport<br /><br />Possible values: UDP, TCP
remoteAddress | string | No | The remote address of the ICE candidate selected for the transport (IPv4, IPv6, FQDN)
remotePort | number | No | The remote port number
rtpBytesReceived | number | No | The total amount of RTP bytes received on this transport
rtpBytesSent | number | No | The total amount of RTP bytes sent on this transport
rtpPacketsReceived | number | No | The total amount of RTP packets received on this transport
rtpPacketsSent | number | No | The total amount of RTP packets sent on this transport
rtpPacketsLost | number | No | The total amount of RTP packets lost on this transport
rtxBytesReceived | number | No | The total amount of RTX bytes received on this transport
rtxBytesSent | number | No | The total amount of RTX bytes sent on this transport
rtxPacketsReceived | number | No | The total amount of RTX packets received on this transport
rtxPacketsSent | number | No | The total amount of RTX packets sent on this transport
rtxPacketsDiscarded | number | No | The total amount of RTX packets discarded on this transport
sctpBytesReceived | number | No | The total amount of SCTP bytes received on this transport
sctpBytesSent | number | No | The total amount of SCTP bytes sent on this transport
sctpPacketsReceived | number | No | The total amount of SCTP packets received on this transport
sctpPacketsSent | number | No | The total amount of SCTP packets sent on this transport
