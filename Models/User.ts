enum UserType{
    Admin,
    Member,
    Guest,
}
    export class User {
       private _firstName: string = "";
        public get firstName(): string {
            return this._firstName;
        }
        public set firstName(value: string) {
            this._firstName = value;
        }

       private _lastName: string = "";
        public get lastName(): string {
            return this._lastName;
        }
        public set lastName(value: string) {
            this._lastName = value;
        }
       private _userId: string = "";
        public get userId(): string {
            return this._userId;
        }
        public set userId(value: string) {
            this._userId = value;
        }
       private _age?: number | undefined;
        public get age(): number | undefined {
            return this._age;
        }
        public set age(value: number | undefined) {
            this._age = value;
        }
        private userType : UserType = UserType.Guest;
        public constructor();
        public constructor(fname: string, lname: string, p_age: number, p_userid: string);


        public constructor(fname?: string, lname?: string, p_age?: number, p_userid?: string) {
            if (fname && lname && p_age !== undefined && p_userid) {
                this._firstName = fname;
                this._lastName = lname;
                this._age = p_age;
                this._userId = p_userid;
            }
        }
        public fullName() : string{
            return `${this._firstName} ${this._lastName}`;
        }
        public greetUser(){
            let message:string;
            switch(this.userType){
                case UserType.Admin :
                    message="Hello ,admin";
                    break;
                case UserType.Member:
                    message="Hello, membre";
                    break;
                case UserType.Guest:
                    message="Hello, ";
                    break;
            }
            console.log(`${message} ${this.fullName}`);
        }


}