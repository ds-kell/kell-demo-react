export class User {
    constructor(
      public id: string,
      public name: string,
      public email: string
    ) {}
  
    changeEmail(newEmail: string) {
      if (!this.validateEmail(newEmail)) {
        throw new Error('Invalid email');
      }
      this.email = newEmail;
    }
  
    private validateEmail(email: string): boolean {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  }
  