const certDir = `/home/enzo_francesca/vr`;
const domain = `certs`;

// const options = {
//   key: fs.readFileSync(`${certDir}/${domain}/privkey.pem`),
//   cert: fs.readFileSync(`${certDir}/${domain}/fullchain.pem`)
// };
module.exports = {
    listenIp: '0.0.0.0',
    listenPort: 5001,
    //sslCrt: `${__dirname}/ssl/apache-selfsigned.crt`,
    //sslKey: `${__dirname}/ssl/apache-selfsigned.key`,
    sslCrt: `${certDir}/${domain}/fullchain.pem`,
    sslKey: `${certDir}/${domain}/privkey.pem`,

    mediasoup: {
      // Worker settings
      worker: {
        rtcMinPort: 10000, 
        rtcMaxPort: 10100,
        logLevel: 'debug',
        logTags: [
          'info',
          'ice',
          'dtls',
          'rtp',
          'srtp',
          'rtcp',
          // 'rtx',
          // 'bwe',
          // 'score',
          // 'simulcast',
          // 'svc'
        ],
        // logInterval: 60000
      },
      // Router settings
      router: {
        mediaCodecs:
          [
            {
              kind: 'audio',
              mimeType: 'audio/opus', //opus for audio
              clockRate: 48000,
              channels: 2
            },
            {
              kind: 'video',
              mimeType: 'video/VP8', //vp8 for video
              clockRate: 90000,
              parameters:
                {
                  'x-google-start-bitrate': 1000
                }
            },
          ]
      },
      // WebRtcTransport settings
      webRtcTransport: {
        listenIps: [
          {
            ip: '127.0.0.1',
            announcedIp: null,
          }
        ],
        maxIncomingBitrate: 1500000,
        initialAvailableOutgoingBitrate: 1000000,
        // reasonable because the outgoing bandwidth is usually less than incoming bandwidth
      }
    }
  };
  