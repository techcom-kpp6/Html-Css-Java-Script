function changeColor() {
    document.getElementById("001").style.color = "green";
    alert("Color changed to green!");
}
function resiveData() {
    document.getElementById("002").innerHTML = "Data reseived!";
    alert("Data reseived!");
}
function sendData() {
    const Data = document.getElementById("test").value;
    alert("Send Data: " + Data);
}
function showInput1() {
    let DataName = document.getElementById("test").value;
    console.log(DataName);
    alert("Name is: " + DataName);
}
function showInput() {
    let id = document.getElementById("userId").value;
    let pass = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;

    document.getElementById("data1").value = id;
    document.getElementById("data2").value = pass;
    document.getElementById("data3").value = address;
    document.getElementById("data4").value = phone;
    alert("ID : " + id + "\nPassword : " + pass + "\nAddress : " + address + "\nPhone : " + phone);
    alert("Data1 : " + id + "\nData2 : " + pass + "\nData3 : " + address + "\nData4 : " + phone);
}
