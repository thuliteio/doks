## OutboundVideoTrackReport
---
A Report created for Outbound Video Tracks. A combination of Video source, Codec metadata carrying outbound and remote inbound RTP stat measurements


Name | Type | Description
--- | --- | ---
serviceUUID | string | The service UUID reported by the OutboundAudioTrackReport
serviceName | null,string | The resolved service name the report belongs to
mediaUnitId | string | The media unit id provided as resource identifier and belongs to the report
callUUID | null,string | The generated unique identifier of a call the report belongs to
callName | null,string | The provided call name reported by the OutboundAudioTrackReport
clientId | null,string | The generated unique identifier of a client the report belongs to
sampleSeq | null,int | The consecutively incresaed sample sequence reports are generated from
userId | null,string | The provided name of the user participating in the call
marker | null,string | The marker reported by the OutboundAudioTrackReport
timestamp | long | The timestamp reported by the OutboundAudioTrackReport
ssrc | long | The RTP SSRC field
packetsSent | null,int | The total number of packets sent on the corresponded synchronization source
bytesSent | null,long | The total number of bytes sent on the corresponded synchronization source
rid | null,long |  The rid encoding parameter of the corresponded synchronization source
lastPacketSentTimestamp | null,long |  the timestamp the last packet was sent. (UTC epoch in ms)
headerBytesSent | null,long | Total number of RTP header and padding bytes sent over the corresponding synchronization source (ssrc)
packetsDiscardedOnSend | null,int | Total number of RTP packets discarded at sender side over the corresponding synchronization source (ssrc)
bytesDiscardedOnSend | null,long | Total number of RTP bytes discarded at sender side over the corresponding synchronization source (ssrc)
fecPacketsSent | null,int | Total number of FEC packets sent over the corresponding synchronization source (ssrc)
retransmittedPacketsSent | null,int | Total number of retransmitted packets sent over the corresponding synchronization source (ssrc).
retransmittedBytesSent | null,long | Total number of retransmitted bytes sent over the corresponded synchronization source (ssrc).
targetBitrate | null,long | Reflects the current encoder target in bits per second.
totalEncodedBytesTarget | null,long | The total number of bytes of RTP coherent frames encoded completly depending on the frame size the encoder targets
frameWidth | null,int | Represents the height of the last encoded frame sent over the corresponded synchronization source
frameHeight | null,int | Represents the width of the last encoded frame sent over the corresponded synchronization source
frameBitDepth | null,int | Represents the bit depth per pixel of the last encoded frame sent over the corresponded synchronization source
framesPerSecond | null,double | The number of encoded frames over the last second sent over the corresponded synchronization source
framesSent | null,int | The number of frames sent over the corresponded synchronization source
hugeFramesSent | null,int | The number of huge frames (2.5x greater than the average size of frame) sent over the corresponded synchronization source
framesEncoded | null,int | The number of frames encoded over the corresponded synchronization source
keyFramesEncoded | null,int | The number of keyframes sent over the corresponded synchronization source
framesDiscardedOnSend | null,int | The number of frames discarded before sending over the corresponded synchronization source
qpSum | null,long | The sum of QP values encoded by the encoder corresponded to the synchronization source
totalEncodeTime | null,double | The sum of encoding time spent by the encoder corresponded to the synchronization source
totalPacketSendDelay | null,double | The total number of delay packets buffered at the sender side in seconds over the corresponding synchronization source
averageRtcpInterval | null,double | The average RTCP interval between two consecutive compound RTCP packets sent for the corresponding synchronization source (ssrc)
qualityLimitationReason | null,string | The reason behind the last a quality limitation changes happened for the corresponding synchronization source (ssrc)
qualityLimitationDurations | null,double | The total duration of the quality limitations happened for the corresponding synchronization source (ssrc)
qualityLimitationResolutionChanges | null,int | The number of quality limiatation changes happened for the corresponding synchronization source (ssrc)
perDscpPacketsSent | null,double | The total number of DSCP flagged RTP packets sent over the corresponding synchronization source (ssrc)
nackCount | null,int | Count the total number of Negative ACKnowledgement (NACK) packets received over the corresponding synchronization source (ssrc)
firCount | null,int | The number of full inter requests happened over the corresponding synchronization source (ssrc)
pliCount | null,int | The number of picture loss indication happened received over the corresponding synchronization source (ssrc)
sliCount | null,int | The number of slice loss indication happened over the corresponding synchronization source (ssrc)
encoderImplementation | null,string | Indicate the name of the encoder implementation library
packetsReceived | null,int | The total number of packets received on the corresponded synchronization source
packetsLost | null,int | The total number of bytes received on the corresponded synchronization source
jitter | null,double | The corresponded synchronization source reported jitter
packetsDiscarded | null,int | The total number of packets missed the playout point and therefore discarded by the jitterbuffer
packetsRepaired | null,int | The total number of packets repaired by either FEC or due to retransmission on the corresponded synchronization source
burstPacketsLost | null,int | The total number of packets lost in burst (RFC6958)
burstPacketsDiscarded | null,int | The total number of packets discarded in burst (RFC6958)
burstLossCount | null,int | The total number of burst happened causes burstPacketsLost on the corresponding synchronization source
burstDiscardCount | null,int | The total number of burst happened causes burstPacketsDiscarded on the corresponding synchronization source
burstLossRate | null,double | The fraction of RTP packets lost during bursts proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
burstDiscardRate | null,double | The fraction of RTP packets discarded during bursts proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
gapLossRate | null,double | The fraction of RTP packets lost during gap proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
gapDiscardRate | null,double | The fraction of RTP packets discarded during gap proportionally to the total number of RTP packets expected in the bursts on the corresponding synchronization source
framesDropped | null,int | The number of frames dropped over the corresponded synchronization source
partialFramesLost | null,int | The number of partial frames lost over the corresponded synchronization source
fullFramesLost | null,int | The number of full frames lost over the corresponded synchronization source
roundTripTime | null,double | RTT measurement in seconds based on (most likely) SR, and RR belongs to the corresponded synchronization source
totalRoundTripTime | null,double | The sum of RTT measurements belongs to the corresponded synchronization source
fractionLost | null,double | The receiver reported fractional lost belongs to the corresponded synchronization source
reportsReceived | null,int | The total number of RR reports received, which is the base of the remote inbound calculation on this source
roundTripTimeMeasurements | null,int | The total number of calculated RR measurements received on this source
relayedSource | null,boolean | True if the corresponded media source is remote, false otherwise (or null depending on browser and version)
encodedFrameWidth | null,int | Indicate the encoded width of the frame received on the corresponded synchronization source (ssrc)
encodedFrameHeight | null,int | Indicate the encoded height of the frame received on the corresponded synchronization source (ssrc)
encodedFrameBitDepth | null,int | Indicate the encoded bit depth per pixel of the last decoded frame received on the corresponded synchronization source (ssrc)
encodedFramesPerSecond | null,double | Indicate the encoded number of decoded frames in the last second received on the corresponded synchronization source (ssrc)
sndEnded | null,boolean | Flag represents if the sender ended the media source or not.
rcvEnded | null,boolean | Flag represents if the receiver ended the media source or not.
payloadType | null,int | The type of the payload the RTP packet SSRC belongs to
mimeType | null,string | the MIME type of the codec (e.g.: video/vp8)
clockRate | null,long | The negotiated clock rate the RTP timestamp is generated of
channels | null,int | The number of channels for audio is used (in stereo it is 2, otherwise it is most likely null)
sdpFmtpLine | null,string | The a=fmtp line in the SDP corresponding to the codec
