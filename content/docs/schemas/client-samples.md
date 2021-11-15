---
contributors: {'Balazs Kreith'}
title: "Client Sample"
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
## ClientSample
---


A compound object holds a set of measurements belonging to a aspecific time


Field | Type | Required | Description 
--- | --- | --- | ---
clientId | string | Yes | The unique generated client id the report is generated from
timestamp | number | Yes | The timestamp when the sample is created
sampleSeq | number | No | The sequence number a source assigns to the sample. <br />Every time the source make a sample at a client <br />this number is monothonically incremented.
roomId | string | No | The WebRTC app configured room id the client was at the call.<br />If it is configured, then every sample carries this information.
userId | string | No | The WebRTC app configured user id of the client.<br />If it is configured, then every sample carries this information.
engine | Engine | No | The engine
platform | Platform | No | The platform
browser | Browser | No | Details of the browser the client has
os | OperationSystem | No | Details about the operation system the client has
mediaConstraints | array | No | List of the media constraints the client has<br /><br />Only presented if any changes occurred in the client
mediaDevices | array | No | List of the media devices the client has.
userMediaErrors | array | No | List of user media errors<br /><br />Only presented if any changes occurred in the client
extensionStats | array | No | List of the extension stats added by the webrtc app
iceServers | array | No | List of ICE server the client has<br /><br />Only presented if any changes occurred in the client
pcTransports | array | No | List of the peer connection transport object.
mediaSources | array | No | A list of media sources a client uses.<br />This attribute only updates if there is a change in the list of source.<br /><br />Only presented if any changes occurred in the client
codecs | array | No | List of codec the client has<br /><br />Only presented if any changes occurred in the client
certificates | array | No | The certificates the client provided<br /><br />Only presented if any changes occurred in the client
inboundAudioTracks | array | No | The inbound audio track statistics
inboundVideoTracks | array | No | The inbound video track statistics
outboundAudioTracks | array | No | The outbound audio track statistics
outboundVideoTracks | array | No | The outbound video track statistics
iceLocalCandidates | array | No | Local ICE candidates<br /><br />Only presented if any changes occurred in the client
iceRemoteCandidates | array | No | Remote ICE candidates<br /><br />Only presented if any changes occurred in the client
dataChannels | array | No | Data channels
timeZoneOffsetInHours | number | No | The client app running offsets from GMT in hours
marker | string | No | A sample marker indicate an additional information from the app




### Engine
---


Engine


Field | Type | Required | Description 
--- | --- | --- | ---
name | string | No | The name of
version | string | No | The version of


### Platform
---


Platform infromation


Field | Type | Required | Description 
--- | --- | --- | ---
type | string | No | The type of the platform
vendor | string | No | The vendor of the platform
model | string | No | The model of the platform


### Browser
---


Browser infromation


Field | Type | Required | Description 
--- | --- | --- | ---
name | string | No | The name of the browser
version | string | No | The version of


### OperationSystem
---


Field | Type | Required | Description 
--- | --- | --- | ---
name | string | No | Name of the operation system.
version | string | No | The version number of the operation system
versionName | string | No | The version name of the operation system


### ExtensionStat
---


The ExtensionStat class is a custom defined payload, and type pair, which sent to the endpoint with the intention of landing in the backend database without any transformation


Field | Type | Required | Description 
--- | --- | --- | ---
extensionType | string | No | The custom defined type of the extension
payload | string | No | The payload of the extension


### PeerConnectionTransport
---


A compounded object built up by using 
 * RTCTransportStats
 * RTCSctpTransportStats
 * RTCIceCandidateStats
 * RTCIceCandidatePairStats
 * RTCCertificateStats

from https://www.w3.org/TR/webrtc-stats/


Field | Type | Required | Description 
--- | --- | --- | ---
peerConnectionId | string | No | The unique generated id for the peer connection
label | string | No | The webrtc app provided label to the peer connection
dataChannelsOpened | number | No | Represents the number of unique RTCDataChannels that have entered the "open" state during their lifetime.
dataChannelsClosed | number | No | Represents the number of unique RTCDataChannels that had the "open" state, but now they are "closed"
dataChannelsRequested | number | No | Represents the number of unique RTCDataChannels successfully requested from RTCPeerConnection.
dataChannelsAccepted | number | No | Represents the number of unique RTCDataChannels signaled in a ondatachannel event on the RTCPeerConnection.
packetsSent | number | No | Represents the total number of packets sent over this transport.
packetsReceived | number | No | Represents the total number of packets received on this transport.
bytesSent | number | No | Represents the total number of payload bytes sent on this RTCIceTransport, i.e., not including headers, padding or ICE connectivity checks.
bytesReceived | number | No | Represents the total number of payload bytes received on this RTCIceTransport, i.e., not including headers, padding or ICE connectivity checks.
iceRole | string | No | Set to the current value of the role attribute of the underlying RTCDtlsTransport.iceTransport.
iceLocalUsernameFragment | number | No | Set to the current value of the local username fragment used in message validation procedures
dtlsState | string | No | Set to the current value of the state attribute of the underlying RTCDtlsTransport.
iceState | string | No | Set to the current value of the state attribute of the underlying RTCIceTransport.
selectedCandidatePairId | string | No | It is a unique identifier that is associated to the object that was inspected to produce the RTCIceCandidatePairStats associated with this transport.
localCertificateId | string | No | For components where DTLS is negotiated, give local certificate.
remoteCertificateId | string | No | For components where DTLS is negotiated, give remote certificate.
tlsVersion | string | No | The tls version of the peer connection when the DTLS negotiation is complete
dtlsCipher | string | No | Descriptive name of the cipher suite used for the DTLS transport, as defined in the "Description" column of the IANA cipher suite registry
srtpCipher | string | No | Descriptive name of the protection profile used for the SRTP transport, as defined in the "Profile" column of the IANA DTLS-SRTP protection profile registry
tlsGroup | string | No | Descriptive name of the group used for the encryption, as defined in the "Description" column of the IANA TLS Supported Groups registry
selectedCandidatePairChanges | string | No | The number of times that the selected candidate pair of this transport has changed. Going from not having a selected candidate pair to having a selected candidate pair, or the other way around, also increases this counter. It is initially zero and becomes one when an initial candidate pair is selected.
sctpSmoothedRoundTripTime | number | No | The latest smoothed round-trip time value, corresponding to spinfo_srtt defined in [RFC6458] but converted to seconds. If there has been no round-trip time measurements yet, this value is undefined.
sctpCongestionWindow | number | No | The latest congestion window, corresponding to spinfo_cwnd defined in [RFC6458].
sctpReceiverWindow | number | No | The latest receiver window, corresponding to sstat_rwnd defined in [RFC6458].
sctpMtu | number | No | The latest maximum transmission unit, corresponding to spinfo_mtu defined in [RFC6458].
sctpUnackData | number | No | The number of unacknowledged DATA chunks, corresponding to sstat_unackdata defined in [RFC6458].
candidatePairState | string | No | The state of ICE Candidate used for the peer connection
candidatePairPacketsSent | number | No | The total number of packets sent on the peer connection using the selected candidate pair.
candidatePairPacketsReceived | number | No | The total number of packets received on the peer connection using the selected candidate pair.
candidatePairBytesSent | number | No | The total number of payload bytes sent on the peer connection using the selected candidate pair.
candidatePairBytesReceived | number | No | The total number of payload bytes received on the peer connection using the selected candidate pair.
candidatePairLastPacketSentTimestamp | number | No | The timestamp of the last sent packet on the peer connection using the selected ICE Candidate pair.
candidatePairLastPacketReceivedTimestamp | number | No | The timestamp of the last received packet on the peer connection using the selected ICE Candidate pair.
candidatePairFirstRequestTimestamp | number | No | The timestamp of the first request sent on the peer connection to select a candidate pair
candidatePairLastRequestTimestamp | number | No | The timestamp of the last request sent on the peer connection to select a candidate pair
candidatePairLastResponseTimestamp | number | No | The timestamp of the last response received on tthe peer connection using the selected candidate pair
candidatePairTotalRoundTripTime | number | No | the sum of all round trip time measurements in seconds reported by STUN packet using the selected candidate pair on the peer connection
candidatePairCurrentRoundTripTime | number | No | The latest round trip time calculated from STUN connectivity checks
candidatePairAvailableOutgoingBitrate | number | No | Reported by the underlying congestion control algorithm on this peer connection using the selected ICE candidate pair
candidatePairAvailableIncomingBitrate | number | No | Reported by the underlying congestion control algorithm on this peer connection using the selected ICE candidate pair
candidatePairCircuitBreakerTriggerCount | number | No | The total number of circuit breaker condition happened on the peer connection using the selected candidate pair
candidatePairRequestsReceived | number | No | The total number of requests received for connectivity check on the peer connection using the selected ice candidate pair
candidatePairRequestsSent | number | No | The total number of requests sent for connectivity check on the peer connection using the selected ice candidate pair
candidatePairResponsesReceived | number | No | The total number of responses received for connectivity check on the peer connection using the selected ice candidate pair
candidatePairResponsesSent | number | No | The total number of responses sent for connectivity check on the peer connection using the selected ice candidate pair
candidatePairRetransmissionReceived | number | No | The total number of retransmission received on the peer connection using the selected ice candidate pair
candidatePairRetransmissionSent | number | No | The total number of retransmission sent on the peer connection using the selected ice candidate pair
candidatePairConsentRequestsSent | number | No | The total number of consent requests sent on the peer connection using the selected ice candidate pair
candidatePairConsentExpiredTimestamp | number | No | The total number of consent expired on the peer connection using the selected ice candidate pair
candidatePairPacketsDiscardedOnSend | number | No | The total number packet discarded before sending on the peer connection using the selected candidate pair
candidatePairBytesDiscardedOnSend | number | No | The total number bytes discarded before sending on the peer connection using the selected candidate pair
candidatePairRequestBytesSent | number | No | The total number bytes sent as a request on the peer connection using the selected candidate pair
candidatePairConsentRequestBytesSent | number | No | The total number bytes sent in consent packets on the peer connection using the selected candidate pair
candidatePairResponseBytesSent | number | No | The total number bytes sent as response packets on the peer connection using the selected candidate pair
localAddress | string | No | The local address of the ICE candidate at the local endpoint (IPv4, IPv6, FQDN)
localPort | number | No | The port number used by the local ICE candidate for connectivity<br /><br />Possible values: UDP, TCP
localProtocol | string | No | The protocol used by the local ICE candidate for connectivity
localCandidateType | string | No | The type of the candidate used for communication.<br /><br />Possible values: host, srflx, prflx, relay
localRelayProtocol | string | No | It is the protocol used by the endpoint to communicate with the TURN server.<br /><br />Possible values: UDP, TCP, TLS
localCandidateICEServerUrl | string | No | The url of the ICE server used by the <br />local endpoint on the corresponded transport
remoteAddress | string | No | The local address of the ICE candidate at the remote endpoint (IPv4, IPv6, FQDN)
remotePort | number | No | The port number used by the remote ICE candidate for connectivity<br /><br />Possible values: UDP, TCP
remoteProtocol | string | No | The protocol used by the remote ICE candidate for connectivity
remoteCandidateType | string | No | The type of the remote candidate used for communication.<br /><br />Possible values: host, srflx, prflx, relay
remoteCandidateICEServerUrl | string | No | The url of the ICE server used by the <br />remote endpoint on the corresponded transport
remoteRelayProtocol | string | No | It is the protocol used by the remote endpoint to communicate with the TURN server.<br /><br />Possible values: UDP, TCP, TLS
sentMediaPackets | number | No | Client calculated metric.<br />The total number of media packets sent by all tracks using the peer connection.<br /><br />Note: Take care of the fact that tracks are attached and detached significantly changing the value of this field
receivedMediaPackets | number | No | Client calculated metric.<br />The total number of media packets received by all tracks using the peer connection.<br /><br />Note: Take care of the fact that tracks are attached and detached significantly changing the value of this field
lostMediaPackets | number | No | Client calculated metric.<br />The total number of media packets lost by all tracks using the peer connection.<br /><br />Note: Take care of the fact that tracks are attached and detached significantly changing the value of this field
videoRttAvg | number | No | Client calculated metric.<br />A smoothed average value calculated by averaging all of the video tracks sent on the peer connection
audioRttAvg | number | No | Client calculated metric.<br />A smoothed average value calculated by averaging all of the audio tracks sent on the peer connection


### MediaSourceStat
---


Represents the WebRTC Stats defined [RTCMediaSourceStats](https://www.w3.org/TR/webrtc-stats/#dom-rtcmediasourcestats)

NOTE: This name is postfixed with "stat" in order to avoid collision of the MediaSource name part of the standard library and picked up by the schema transpiler


Field | Type | Required | Description 
--- | --- | --- | ---
trackIdentifier | string | No | The unique generated identifier the corresponded track has
kind | string | No | The type of the media the Mediasource produces.<br /><br />Possible values are: "audio", "video"
relayedSource | string | No | Flag indicating if the media source is relayed or not, meaning the local endpoint is not the actual source of the media, but a proxy for that media.
audioLevel | number | No | the audio level of the media source.
totalAudioEnergy | number | No | The audio energy of the media source<br /><br />For calculation see https://www.w3.org/TR/webrtc-stats/#dom-rtcaudiosourcestats-totalaudioenergy
totalSamplesDuration | number | No | The duration of the audio type media source
echoReturnLoss | number | No | if echo cancellation is applied on the media source, then <br />this number represents the loss calculation defined in https://www.itu.int/rec/T-REC-G.168-201504-I/en
echoReturnLossEnhancement | number | No | similar to the echo return loss calculation
width | number | No | The width, in pixels, of the last frame originating from the media source
height | number | No | The height, in pixels, of the last frame originating from the media source
bitDepth | number | No | The bit depth per pixels, of the last frame originating from the media source
frames | number | No | The total number of frames originated from the media source
framesPerSecond | number | No | The number of frames origianted from the media source in the last second


### Codec
---


The Media Codec the client uses to encode / decode certain media

Fields related to [RTCCodecStats](https://www.w3.org/TR/webrtc-stats/#dom-rtccodecstats)


Field | Type | Required | Description 
--- | --- | --- | ---
payloadType | string | No | Payload type used in RTP encoding / decoding process.
codecType | string | No | Either "encode", or "decode" depending on the role the codec plays in the client
transportId | string | No | the unique identifier for the peer connection transport
mimeType | string | No | The MIME type of the media. eg.: audio/opus
clockRate | number | No | the clock rate used in RTP transport to generate the timestamp for the carried frames
channels | number | No | Audio Only. Represnts the number of chanels an audio media source have. Only interesting if stereo is presented
sdpFmtpLine | string | No | The SDP line determines the codec
peerConnectionId | string | No | The peer connection id the codec is related to


### Certificate
---


Information about a certificate used by the ICE pair on peer connection


Field | Type | Required | Description 
--- | --- | --- | ---
fingerprint | string | No | The fingerprint of the certificate
fingerprintAlgorithm | string | No | The hash function used to generate the fingerprint
base64Certificate | string | No | The DER encoded base-64 representation of the certificate.
issuerCertificateId | string | No | The id of the next certificate in the certificate chain


### InboundAudioTrack
---


A combination of InboundRTPStat, RemoteInboundRTPStat, Receiver, and Codec webrtc stat standard exposed object at the client specific for audio tracks


Field | Type | Required | Description 
--- | --- | --- | ---
ssrc | number | No | The SSRC identifier of the corresponded RTP stream.
packetsReceived | number | No | The total number of packets received on the corresponded RTP stream,
packetsLost | number | No | The total number of packets lost on the corresponded RTP stream
jitter | number | No | The last RR reported jitter on the corresponded RTP stream
packetsDiscarded | number | No | The total number of discarded packets on the corresponded RTP stream.
packetsRepaired | number | No | The total number of packets repaired by either retransmission or FEC on the corresponded RTP stream.
burstPacketsLost | number | No | The number of packets lost in burst period on the corresponded RTP stream.
burstPacketsDiscarded | number | No | The total number of packets discarded during a burst period on the corresponded RTP stream.
burstLossCount | number | No | The total number of burst lost happened on the coerresponded RTP stream
burstDiscardCount | number | No | The number of burst discards happened on the corresponded RTP stream.
burstLossRate | number | No | The loss rate during burst period on the corresponded RTP stream.
burstDiscardRate | number | No | The discard rate during burst period on the corresponded RTP stream.
gapLossRate | number | No | The loss rate during a gap period on the corresponded RTP stream.
gapDiscardRate | number | No | The discard rate during a gap period on the corresponded RTP stream
voiceActivityFlag | boolean | No | The RTP header V flag indicate of the activity of the media source by the media codec if the RTP transport ships it through
lastPacketReceivedTimestamp | number | No | The RTP timestamp of the last received packet on the corresponded RTP stream
averageRtcpInterval | number | No | The RTCP average interval of sending compound RTCP reports
headerBytesReceived | number | No | The total amount of header bytes received on the corresponded RTP stream.
fecPacketsReceived | number | No | The total number of FEC packets received on the corresponded RTP stream.
fecPacketsDiscarded | number | No | The total number of FEC packets discafrded on the corresponded RTP stream.
bytesReceived | number | No | The total amount of payload bytes received on the corresponded RTP stream
packetsFailedDecryption | number | No | The total number of packets failed to be decrypted on the corresponded RTP stream
packetsDuplicated | number | No | The total number of duplicated packets appeared on the corresponded RTP stream.
perDscpPacketsReceived | number | No | The ratio of the DSCP packets on the corresponded RTP straem
nackCount | number | No | The total number of negative acknowledgement received on the corresponded RTP stream
totalProcessingDelay | number | No | The total processing delay of the RTP packets from the moment they received until the moment the jitter buffer emits them on the corresponded RTP strema.
estimatedPlayoutTimestamp | number | No | The estimated timestamp of the jitterbuffer emits the RTP packets on the corresponded RTP stream.
jitterBufferDelay | number | No | The total delay encountered by the jitter buffer for the RTP stream to allevaite the effect of jitter on the transport.
jitterBufferEmittedCount | number | No | The total number of emits happened for the corresponded RTP stream
totalSamplesReceived | number | No | The total number of audio samples received on the corresponded RTP stream
totalSamplesDecoded | number | No | The total number of samples decoded on the corresponded RTP stream
samplesDecodedWithSilk | number | No | The total number of samples decoded with SILK on the corresponded RTP stream
samplesDecodedWithCelt | number | No | The total number of samples decodedd with CELT on the corresponded RTP stream
concealedSamples | number | No | The total number of samples decoded by the media decoder from the corresponded RTP stream
silentConcealedSamples | number | No | The total number of samples concealed from the corresponded RTP stream
concealmentEvents | number | No | The total number of concealed event emitted to the media codec by the corresponded jitterbuffer
insertedSamplesForDeceleration | number | No | The total number of samples inserted to decelarete the audio playout (happens when the jitterbuffer detects a shrinking buffer and need to increase the jitter buffer delay)
removedSamplesForAcceleration | number | No | The total number of samples inserted to accelerate the audio playout (happens when the jitterbuffer detects a growing buffer and need to shrink the jitter buffer delay)
audioLevel | number | No | The level of audio played out from the corresponded RTP stream
totalAudioEnergy | number | No | the sum of level of energy of the microphone of the audio of the remote media source
totalSamplesDuration | number | No | The total duration of the effective samples of the audio source
decoderImplementation | string | No | The library implements the decoder for the media source
packetsSent | number | No | The total number of packets sent by the remote endpoint on the corresponded RTP stream
bytesSent | number | No | The total amount of bytes sent by the remote endpoint on the corresponded RTP stream
remoteTimestamp | number | No | The remote timestamp of the RTCP packets reported in the SR
reportsSent | number | No | The total number of SR reports sent by the remote endpoint on the corresponded RTP stream
roundTripTime | number | No | Estimated round trip time for the SR reports based on DLRR reports on the corresponded RTP stream
totalRoundTripTime | number | No | Represents the cumulative sum of all round trip time measurements performed on the corresponded RTP stream
roundTripTimeMeasurements | number | No | Represents the total number of SR reports received with DLRR reports to be able to calculate the round trip time on the corresponded RTP stream
ended | boolean | No | Flag indicate if the MediaTrack has been eded or not
payloadType | string | No | The type of the payload the RTP stream carries
codecType | string | No | The type of the codec role inthe endpoint.<br /><br />Possible values are: "audio", and "video"
mimeType | string | No | The MIME type of the media codec
clockRate | number | No | the clock rate of the media source generates samples or frames
channels | number | No | The number of channels the media source has.
sdpFmtpLine | string | No | The corresponded SDP line in SDP negotiation
trackId | string | No | The identifier of the MediaTrack the client plays the audio out
peerConnectionId | string | No | The unique generated identifier of the peer connection the inbound audio track belongs to
remoteClientId | string | No | The remote clientId the source outbound track belongs to
rtpStreamId | string | No | A unique identifier (UUID) for the RTP stream the media content is sent. Typically if a client is joined to an SFU this can be identical to the id the SFU uses to (publish/subscribe, produce/consume, ...) media


### InboundVideoTrack
---


A compound stat object used by the client giving information about a video track 
used by the client as inbound


Field | Type | Required | Description 
--- | --- | --- | ---
ssrc | number | No | The SSRC identifier of the corresponded RTP stream.
packetsReceived | number | No | The total number of packets received on the corresponded RTP stream,
packetsLost | number | No | The total number of packets lost on the corresponded RTP stream
jitter | number | No | The last RR reported jitter on the corresponded RTP stream
packetsDiscarded | number | No | The total number of discarded packets on the corresponded RTP stream.
packetsRepaired | number | No | The total number of packets repaired by either retransmission or FEC on the corresponded RTP stream.
burstPacketsLost | number | No | The number of packets lost in burst period on the corresponded RTP stream.
burstPacketsDiscarded | number | No | The total number of packets discarded during a burst period on the corresponded RTP stream.
burstLossCount | number | No | The total number of burst lost happened on the coerresponded RTP stream
burstDiscardCount | number | No | The number of burst discards happened on the corresponded RTP stream.
burstLossRate | number | No | The loss rate during burst period on the corresponded RTP stream.
burstDiscardRate | number | No | The discard rate during burst period on the corresponded RTP stream.
gapLossRate | number | No | The loss rate during a gap period on the corresponded RTP stream.
gapDiscardRate | number | No | The discard rate during a gap period on the corresponded RTP stream
framesDropped | number | No | The total number of frames dropped on the corresponded RTP stream
partialFramesLost | number | No | The total number of frames partially lost on the corresponded RTP stream
fullFramesLost | number | No | The total number of frames fully lost on the corresponded RTP stream
framesDecoded | number | No | The total number of frames decoded on the corresponded RTP stream
keyFramesDecoded | number | No | The total number of keyframes decoded on the corresponded RTP stream
frameWidth | number | No | The width of the frame of the video sent by the remote source on the corresponded RTP stream
frameHeight | number | No | The height of the frame of the video sent by the remote source on the corresponded RTP stream
frameBitDepth | number | No | The bit depth in pixels of the frame of the video sent by the remote source on the corresponded RTP stream
framesPerSecond | number | No | The frame per seconds of the video sent by the remote source on the corresponded RTP stream
qpSum | number | No | The QP sum (only interested in VP8,9) of the frame of the video sent by the remote source on the corresponded RTP stream
totalDecodeTime | number | No | The total tiem spent on decoding video on the corresponded RTP stream
totalInterFrameDelay | number | No | The total interframe delay
totalSquaredInterFrameDelay | number | No | The squere total of the interframe delay (together with teh interframe delay you can calculate the variance)
lastPacketReceivedTimestamp | number | No | The RTP timestamp of the last received packet on the corresponded RTP stream
averageRtcpInterval | number | No | The RTCP average interval of sending compound RTCP reports
headerBytesReceived | number | No | The total amount of header bytes received on the corresponded RTP stream.
fecPacketsReceived | number | No | The total number of FEC packets received on the corresponded RTP stream.
fecPacketsDiscarded | number | No | The total number of FEC packets discafrded on the corresponded RTP stream.
bytesReceived | number | No | The total amount of payload bytes received on the corresponded RTP stream
packetsFailedDecryption | number | No | The total number of packets failed to be decrypted on the corresponded RTP stream
packetsDuplicated | number | No | The total number of duplicated packets appeared on the corresponded RTP stream.
perDscpPacketsReceived | number | No | The ratio of the DSCP packets on the corresponded RTP straem
firCount | number | No | The total number FIR packets sent from this endpoint to the source on the corresponded RTP stream
pliCount | number | No | The total number of Picture Loss Indication sent on the corresponded RTP stream
nackCount | number | No | The total number of negative acknowledgement received on the corresponded RTP stream
sliCount | number | No | The total number of SLI indicator sent from the endpoint on the corresponded RTP stream
totalProcessingDelay | number | No | The total processing delay of the RTP packets from the moment they received until the moment the jitter buffer emits them on the corresponded RTP strema.
estimatedPlayoutTimestamp | number | No | The estimated timestamp of the jitterbuffer emits the RTP packets on the corresponded RTP stream.
jitterBufferDelay | number | No | The total delay encountered by the jitter buffer for the RTP stream to allevaite the effect of jitter on the transport.
jitterBufferEmittedCount | number | No | The total number of emits happened for the corresponded RTP stream.
framesReceived | number | No | The total number of frames received on the corresponded RTP stream.
decoderImplementation | string | No | The library implements the decoder for the media source
packetsSent | number | No | The total number of packets sent by the remote endpoint on the corresponded RTP stream
bytesSent | number | No | The total amount of bytes sent by the remote endpoint on the corresponded RTP stream
remoteTimestamp | number | No | The remote timestamp of the RTCP packets reported in the SR
reportsSent | number | No | The total number of SR reports sent by the remote endpoint on the corresponded RTP stream
roundTripTime | number | No | Estimated round trip time for the SR reports based on DLRR reports on the corresponded RTP stream
totalRoundTripTime | number | No | Represents the cumulative sum of all round trip time measurements performed on the corresponded RTP stream
roundTripTimeMeasurements | number | No | Represents the total number of SR reports received with DLRR reports to be able to calculate the round trip time on the corresponded RTP stream
ended | boolean | No | Flag indicate if the MediaTrack has been eded or not
payloadType | string | No | The type of the payload the RTP stream carries
codecType | string | No | The type of the codec role inthe endpoint.<br /><br />Possible values are: "audio", and "video"
mimeType | string | No | The MIME type of the media codec
clockRate | number | No | the clock rate of the media source generates samples or frames
sdpFmtpLine | string | No | The corresponded SDP line in SDP negotiation
trackId | string | No | The identifier of the MediaTrack the client plays the audio out
peerConnectionId | string | No | The unique generated identifier of the peer connection the inbound audio track belongs to
remoteClientId | string | No | The remote clientId the source outbound track belongs to
rtpStreamId | string | No | A unique identifier (UUID) for the RTP stream the media content is sent. Typically if a client is joined to an SFU this can be identical to the id the SFU uses to (publish/subscribe, produce/consume, ...) media


### OutboundAudioTrack
---


A compound object giving information about the audio track the client uses


Field | Type | Required | Description 
--- | --- | --- | ---
ssrc | number | No | The SSRC identifier of the corresponded RTP stream
packetsSent | number | No | The total number of packets sent on the corresponded RTP stream
bytesSent | number | No | The total amount of payload bytes sent on the corresponded RTP stream
rtxSsrc | number | No | If RTX is negotiated as a separate stream, this is the SSRC of the RTX stream that is associated with this stream's ssrc.
rid | string | No | The rid parameter of the corresponded RTP stream
lastPacketSentTimestamp | number | No | The last RTP packet sent timestamp
headerBytesSent | number | No | The total amount of header bytes sent on the corresponded RTP stream
packetsDiscardedOnSend | number | No | The packets discarded at sending on the corresponded RTP stream
bytesDiscardedOnSend | number | No | The bytes discarded at sending on the corresponded RTP stream.
fecPacketsSent | number | No | The total number of FEC packets sent on the corresponded RTP stream.
retransmittedPacketsSent | number | No | The total number of retransmitted packets sent on the corresponded RTP stream.
retransmittedBytesSent | number | No | The total number of retransmitted bytes sent on the corresponded RTP stream
targetBitrate | number | No | The media codec targeted bit rate
totalEncodedBytesTarget | number | No | The total encoded bytes targeted by the media encoder. this is the sum of the encoded frames
totalSamplesSent | number | No | The total number of samples the media source sent
samplesEncodedWithSilk | number | No | The total number of samples encoded with SILK
samplesEncodedWithCelt | number | No | The total number of samples encoded with CELT
voiceActivityFlag | number | No | The media encoder voice activity flag shipped to teh RTP strem by adding a V flag indicator to the headers
totalPacketSendDelay | number | No | The total amount of delay in seconds the packets subjected to wait before sending. This can be either because of a pace bufffer, or other enforced waiting.
averageRtcpInterval | number | No | The average RTCP interval for SR compound packets
perDscpPacketsSent | number | No | The ratio of the DSCP packets sent on the corresponded RTP stream.
nackCount | number | No | The total number of negative acknowledgement sent on the corresponded RTP stream
encoderImplementation | string | No | The libray name of the media encoder
packetsReceived | number | No | The total number of packets received on the corresponded RTP stream,
packetsLost | number | No | The total number of packets lost on the corresponded RTP stream
jitter | number | No | The last RR reported jitter on the corresponded RTP stream
packetsDiscarded | number | No | The total number of discarded packets on the corresponded RTP stream.
packetsRepaired | number | No | The total number of packets repaired by either retransmission or FEC on the corresponded RTP stream.
burstPacketsLost | number | No | The number of packets lost in burst period on the corresponded RTP stream.
burstPacketsDiscarded | number | No | The total number of packets discarded during a burst period on the corresponded RTP stream.
burstLossCount | number | No | The total number of burst lost happened on the coerresponded RTP stream
burstDiscardCount | number | No | The number of burst discards happened on the corresponded RTP stream.
burstLossRate | number | No | The loss rate during burst period on the corresponded RTP stream.
burstDiscardRate | number | No | The discard rate during burst period on the corresponded RTP stream.
gapLossRate | number | No | The loss rate during a gap period on the corresponded RTP stream.
gapDiscardRate | number | No | The discard rate during a gap period on the corresponded RTP stream
roundTripTime | number | No | The last RTT measurements based on the last SR-RR
totalRoundTripTime | number | No | The total sum of the RTT measurements on the corresponded RTP stream
fractionLost | number | No | The last RR reported fractional lost
reportsReceived | number | No | The number of RR compound report received on the corresponded RTP stream
roundTripTimeMeasurements | number | No | The number of RTT measurement calculated on the corresponded RTP stream
relayedSource | string | No | Flag indicating if the media source is relayed or not, meaning the local endpoint is not the actual source of the media, but a proxy for that media.
audioLevel | number | No | the audio level of the media source.
totalAudioEnergy | number | No | The audio energy of the media source<br /><br />For calculation see https://www.w3.org/TR/webrtc-stats/#dom-rtcaudiosourcestats-totalaudioenergy
totalSamplesDuration | number | No | The duration of the audio type media source
echoReturnLoss | number | No | if echo cancellation is applied on the media source, then <br />this number represents the loss calculation defined in https://www.itu.int/rec/T-REC-G.168-201504-I/en
echoReturnLossEnhancement | number | No | similar to the echo return loss calculation
ended | boolean | No | Flag indicate if the MediaTrack has been eded or not
payloadType | string | No | The type of the payload the RTP stream carries
codecType | string | No | The type of the codec role inthe endpoint.<br /><br />Possible values are: "audio", and "video"
mimeType | string | No | The MIME type of the media codec
clockRate | number | No | the clock rate of the media source generates samples or frames
channels | number | No | The number of channels the media source has.
sdpFmtpLine | string | No | The corresponded SDP line in SDP negotiation
trackId | string | No | The identifier of the MediaTrack the client plays the audio out
peerConnectionId | string | No | The unique generated identifier of the peer connection the inbound audio track belongs to
rtpStreamId | string | No | A unique identifier (UUID) for the RTP stream the media content is sent. Typically if a client is joined to an SFU this can be identical to the id the SFU uses to (publish/subscribe, produce/consume, ...) media


### OutboundVideoTrack
---


Field | Type | Required | Description 
--- | --- | --- | ---
ssrc | number | No | The SSRC identifier of the corresponded RTP stream
packetsSent | number | No | The total number of packets sent on the corresponded RTP stream
bytesSent | number | No | The total amount of payload bytes sent on the corresponded RTP stream
rtxSsrc | number | No | If RTX is negotiated as a separate stream, this is the SSRC of the RTX stream that is associated with this stream's ssrc.
rid | string | No | The rid parameter of the corresponded RTP stream
lastPacketSentTimestamp | number | No | The last RTP packet sent timestamp
headerBytesSent | number | No | The total amount of header bytes sent on the corresponded RTP stream
packetsDiscardedOnSend | number | No | The packets discarded at sending on the corresponded RTP stream
bytesDiscardedOnSend | number | No | The bytes discarded at sending on the corresponded RTP stream.
fecPacketsSent | number | No | The total number of FEC packets sent on the corresponded RTP stream.
retransmittedPacketsSent | number | No | The total number of retransmitted packets sent on the corresponded RTP stream.
retransmittedBytesSent | number | No | The total number of retransmitted bytes sent on the corresponded RTP stream
targetBitrate | number | No | The media codec targeted bit rate
totalEncodedBytesTarget | number | No | The total encoded bytes targeted by the media encoder. this is the sum of the encoded frames
frameWidth | number | No | The frame width in pixels of the frames targeted by the media encoder
frameHeight | number | No | The frame width the media encoder targeted
frameBitDepth | number | No | The frame depth in pixles on the corresponded RTP stream
framesPerSecond | number | No | The encoded number of frames in the last second on the corresponded media source
framesSent | number | No | The total number of frames sent on the corresponded RTP stream
hugeFramesSent | number | No | The total number of huge frames (avgFrameSize * 2.5) on the corresponded RTP stream
framesEncoded | number | No | The total number of frames encoded by the media source
keyFramesEncoded | number | No | The total number of keyframes encoded on the corresponded RTP stream
framesDiscardedOnSend | number | No | The total number of frames discarded on the corresponded RTP stream.
qpSum | number | No | The sum of the QP the media encoder provided on the corresponded RTP stream.
totalEncodeTime | number | No | The total time in seconds spent in encoding media frames for the corresponded RTP stream.
totalPacketSendDelay | number | No | The total amount of delay in seconds the packets subjected to wait before sending. This can be either because of a pace bufffer, or other enforced waiting.
averageRtcpInterval | number | No | The average RTCP interval for SR compound packets
qualityLimitationDurationNone | number | No | Time elapsed in seconds when the RTC connection has not limited the quality
qualityLimitationDurationCPU | number | No | Time elapsed in seconds the RTC connection had a limitation because of CPU
qualityLimitationDurationBandwidth | number | No | Time elapsed in seconds the RTC connection had a limitation because of Bandwidth
qualityLimitationDurationOther | number | No | Time elapsed in seconds the RTC connection had a limitation because of Other factor
qualityLimitationReason | string | No | Indicate a reason for the quality limitation of the corresponded synchronization source
qualityLimitationResolutionChanges | number | No | The total number of resolution changes occured ont he corresponded RTP stream due to quality changes
perDscpPacketsSent | number | No | The ratio of the DSCP packets sent on the corresponded RTP stream.
nackCount | number | No | The total number of negative acknowledgement sent on the corresponded RTP stream
firCount | number | No | The total number of FIR counted on the corresponded RTP stream
pliCount | number | No | The total number of picture loss indication happeend on teh corresaponded mRTP stream
sliCount | number | No | The total number of SLI occured on the corresponded RTP stream
encoderImplementation | string | No | The libray name of the media encoder
packetsReceived | number | No | The total number of packets received on the corresponded RTP stream,
packetsLost | number | No | The total number of packets lost on the corresponded RTP stream
jitter | number | No | The last RR reported jitter on the corresponded RTP stream
packetsDiscarded | number | No | The total number of discarded packets on the corresponded RTP stream.
packetsRepaired | number | No | The total number of packets repaired by either retransmission or FEC on the corresponded RTP stream.
burstPacketsLost | number | No | The number of packets lost in burst period on the corresponded RTP stream.
burstPacketsDiscarded | number | No | The total number of packets discarded during a burst period on the corresponded RTP stream.
burstLossCount | number | No | The total number of burst lost happened on the coerresponded RTP stream
burstDiscardCount | number | No | The number of burst discards happened on the corresponded RTP stream.
burstLossRate | number | No | The loss rate during burst period on the corresponded RTP stream.
burstDiscardRate | number | No | The discard rate during burst period on the corresponded RTP stream.
gapLossRate | number | No | The loss rate during a gap period on the corresponded RTP stream.
gapDiscardRate | number | No | The discard rate during a gap period on the corresponded RTP stream
framesDropped | number | No | The total number of frames reported to be lost by the remote endpoit on the corresponded RTP stream
partialFramesList | number | No | The total number of partial frames reported to be lost by the remote endpoint on the corresponded RTP stream.
fullFramesList | number | No | The total number of full frames lost at the remote endpoint on the corresponded RTP stream.
roundTripTime | number | No | The last RTT measurements based on the last SR-RR
totalRoundTripTime | number | No | The total sum of the RTT measurements on the corresponded RTP stream
fractionLost | number | No | The last RR reported fractional lost
reportsReceived | number | No | The number of RR compound report received on the corresponded RTP stream
roundTripTimeMeasurements | number | No | The number of RTT measurement calculated on the corresponded RTP stream
relayedSource | string | No | Flag indicating if the media source is relayed or not, meaning the local endpoint is not the actual source of the media, but a proxy for that media.
width | number | No | The width, in pixels, of the last frame originating from the media source
height | number | No | The height, in pixels, of the last frame originating from the media source
bitDepth | number | No | The bit depth per pixels, of the last frame originating from the media source
frames | number | No | The total number of frames originated from the media source
ended | boolean | No | Flag indicate if the MediaTrack has been eded or not
payloadType | string | No | The type of the payload the RTP stream carries
codecType | string | No | The type of the codec role inthe endpoint.<br /><br />Possible values are: "audio", and "video"
mimeType | string | No | The MIME type of the media codec
clockRate | number | No | the clock rate of the media source generates samples or frames
channels | number | No | The number of channels the media source has.
sdpFmtpLine | string | No | The corresponded SDP line in SDP negotiation
trackId | string | No | The identifier of the MediaTrack the client plays the audio out
peerConnectionId | string | No | The unique generated identifier of the peer connection the inbound audio track belongs to
rtpStreamId | string | No | A unique identifier (UUID) for the RTP stream the media content is sent. Typically if a client is joined to an SFU this can be identical to the id the SFU uses to (publish/subscribe, produce/consume, ...) media


### ICELocalCandidate
---


Field | Type | Required | Description 
--- | --- | --- | ---
id | string | Yes | The unique identifier of the local candidate
transportId | string | No | The unique identifier of the transport the local candidate belongs to
address | string | No | The address of the local endpoint (Ipv4, Ipv6, FQDN)
port | number | No | The port number of the local endpoint the ICE uses
protocol | string | No | The protocol for the ICE
candidateType | string | No | The type of the local candidate
priority | string | No | The priority of the local candidate
url | string | No | The url of the ICE server
relayProtocol | string | No | The relay protocol the local candidate uses
peerConnectionId | string | No | Refers to the peer connection the local candidate belongs to


### ICERemoteCandidate
---


Field | Type | Required | Description 
--- | --- | --- | ---
id | string | Yes | The unique identifier of the remote candidate
address | string | No | The address of the remote endpoint (Ipv4, Ipv6, FQDN)
port | number | No | The port number of the remote endpoint the ICE uses
protocol | string | No | The protocol for the ICE
candidateType | string | No | The type of the remote candidate
priority | string | No | The priority of the remote candidate
url | string | No | The url of the ICE server
relayProtocol | string | No | The relay protocol the remote candidate uses
peerConnectionId | string | No | Refers to the peer connection the remote candidate belongs to


### DataChannel
---


Field | Type | Required | Description 
--- | --- | --- | ---
id | string | No | Unique identifier of the data channel
label | string | No | The label the data channel provided at the creation
protocol | string | No | The protocol the data channel use to transfer data
dataChannelIdentifier | string | No | The unique identifier of the data channel
state | string | No | The state of the data channel
messagesSent | number | No | The total number of messages sent on this data channel. this is not equal to the number of packets sent, as messages are chunked to packets
bytesSent | string | No | The amount of bytes sent on the corresponded data channel
messagesReceived | number | No | The number of messages received on the corresponded data channel
bytesReceived | number | No | The total amount of bytes received on the corresponded data channel
peerConnectionId | string | No | The unique generated identifier of the peer connection the data channel belongs to
