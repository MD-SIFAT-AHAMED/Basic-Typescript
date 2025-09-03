{

    // Encapsulation holo kono akta property hide kore rakha bhaire duniya theke
    

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number) {
            this._balance = amount + this._balance;
        }

        getBalance() {
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount {
       
        constructor(id: number, name: string, balacne: number) {
            super(id, name, balacne)
        }
    }

    const goribManuserAccount = new BankAccount(111, "sifat", 100);
    goribManuserAccount.addDeposit(200);
    const mybalance = goribManuserAccount.getBalance();
    console.log(mybalance)

}