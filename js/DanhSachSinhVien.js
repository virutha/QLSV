/*-------Prototype DanhSachSinhVien------*/
// Date: 24 Sept 2017
// Author: ....
// ---------------------------------------------
// Requirements: 
// ---------------------------------------------
// Gồm :
// Mảng DSSV và phương thức themSV , TimSV
function DanhSachSinhVien (){
	this.DSSV = [];
	this.themSV = function(SinhVienThem){
		this.DSSV.push(SinhVienThem);
	};
	// this.XoaSinhVien = function(dsSinhVienDuocChon)
	// {
	// 	for(var i=0;dsSinhVienDuocChon.length;i++)
	// 	{
	// 		if(dsSinhVienDuocChon[i]==this.DSSV[i])
	// 		{
	// 			this.DSSV[i].splice(i,1);
	// 		}
	// 	}
	// }
	this.TimSV = function(NameOrMSSV){		
		var svTim = [];
		for (i = 0 ; i < this.DSSV.length ; i++){
			var ds1 = new RegExp(this.DSSV[i].MSSV);
			var ds2 = new RegExp(this.DSSV[i].HoTen);
			if(ds1.test(NameOrMSSV) == true ){
				svTim.push(this.DSSV[i]);
			}
			else if(ds2.test(NameOrMSSV) == true){
				svTim.push(this.DSSV[i]);
			}
		}
		return svTim;
	};
}
