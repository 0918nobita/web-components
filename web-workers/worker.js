self.addEventListener('message', message => {
  console.log(`Received: ${message.data}`);
});
