function Account(name, amount){
  this.fullName = name;
  this.balance = amount;
}
Account.prototype.deposit = function(cash){
  this.balance = this.balance + cash;
}
Account.prototype.withdraw = function(cash){
  this.balance = this.balance - cash;
}
Account.prototype.checkBalance = function(cash){
  return this.balance;
}

$(document).ready(function(){
  var accounts = [];

  $('#btn_register').click(function(){
    var name = $("input#name").val();
    var initialDeposit= parseInt($("input#initial_depo").val());

    var account = new Account(name, initialDeposit);
    accounts.push(account);

    $("#currentBalance").text(accounts[0].checkBalance());
    $("input#name").val("");
    $("input#initial_depo").val("");
  });
  $("button#deposit_btn").click(function(){
    var cash = parseInt($("input#deposit").val());
    accounts[0].deposit(cash);
    $("#currentBalance").text(accounts[0].checkBalance());
    $("input#deposit").val("");
  });

  $("button#withdraw_btn").click(function(){
    var cash = parseInt($("input#withdraw").val());
    accounts[0].withdraw(cash);
    $("#currentBalance").text(accounts[0].checkBalance());
    $("input#withdraw").val("");
  });
  event.preventDefault();
});
