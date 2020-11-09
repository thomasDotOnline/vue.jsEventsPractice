const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: 'Thomas',
      confirmedName: '',
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num
    },
    subtract(num) {
      this.counter = this.counter - num
    },
    yourName(event) {
      this.name = event.target.value;
    },
    submitForm(event) {
      alert('you did the thing!!!!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  },
});

app.mount('#events');