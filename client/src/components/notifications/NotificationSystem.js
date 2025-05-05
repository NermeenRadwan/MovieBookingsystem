class NotificationSystem {
  constructor() {
    this.subscribers = [];
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }

  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter(sub => sub !== observer);
  }

  notify(booking) {
    this.subscribers.forEach(observer => observer.update(booking));
  }
}

class EmailNotifier {
  update(booking) {
    console.log(`Sending email confirmation for booking ${booking.id}`);
    // Actual email sending logic would go here
  }
}

class SMSNotifier {
  update(booking) {
    console.log(`Sending SMS confirmation for booking ${booking.id}`);
    // Actual SMS sending logic would go here
  }
}

const notificationSystem = new NotificationSystem();
notificationSystem.subscribe(new EmailNotifier());
notificationSystem.subscribe(new SMSNotifier());

export default notificationSystem;