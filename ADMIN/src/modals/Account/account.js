function Account(){};
function Account( fullname, email, password, password_confirmation, distinguish) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.password_confirmation = password_confirmation;
    this.distinguish = distinguish;
}