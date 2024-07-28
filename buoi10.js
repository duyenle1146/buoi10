
        function xacnhan()  {
            let x=document.forms["form"]["hoten"].value;
            if(x==""){
                alert("bạn chưa nhập đúng");
                return false;
            }
            let z=document.forms["form"]["thang"].value;
            if (z<1 || z>12){
                alert("chỉ được nhập từ tháng 1 đến tháng 12");
                return false;
            }
            let y=document.forms["form"]["tuoi"].value;
            if(y==""){
                alert("Bạn chưa nhập đúng tuổi");
                return false;
            }
        }  
    