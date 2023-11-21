import {
    Pusher,
    PusherMember,
    PusherChannel,
    PusherEvent,
  } from '@pusher/pusher-websocket-react-native';
  
  const pusher = Pusher.getInstance();
  
    await pusher.init({
      apiKey: "23a7461cd84735f3285c",
      cluster: "eu"
    });
      
    await pusher.connect();
    await pusher.subscribe({
      channelName: "my-channel", 
      onEvent: (event: PusherEvent) => {
        console.log(`Event received: ${event}`);
      }
    });