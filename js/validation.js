/*-------Các phương thức kiểm tra ------*/
// Date: 14 Sept 2017
// Author: ....
// ---------------------------------------------
// Requirements: 
// ---------------------------------------------
// Gồm :

function kiemTraRong(giatri)
{
	if(giatri==='')
	{
		return true;
	}
	return false;
}
function kiemTraKhongXacDinh(giatri)
{
	if(giatri === undefined){
		return true;
	}
	return false;
}
function kiemTraSoLuongKyTu(giatri,tu,den)
{
	if(giatri.length>=tu && giatri.length<=den)
	{
		return true;
	}
	return false;
}
function kiemTraTrongDoanGiaTri(giatri,tu,den)
{
	if(giatri>=tu && giatri<=den)
	{
		return true;
	}
	return false;
}
function kiemTraTrongKhoangGiaTri(giatri,tu,den)
{
	if(giatri>tu && giatri<den)
	{
		return true;
	}
	return false;
}
function kiemTraBieuThucChinhQuy(giatri,bieuthuc)
{
	return giatri.test(bieuthuc);
}
function kiemTraEmail(giatri,bieuthuc)
{
	return giatri.test(bieuthuc);
}
function kiemTraPass(giatri,bieuthuc)
{
	return giatri.test(bieuthuc);
}
function kiemTraSo(giatri)
{
	if(isNaN(giatri)==true)
	{
		return true;
	}
	return false;
}
function kiemTraChu(giatri)
{
	if(isNaN(giatri)==false)
	{
		return true;
	}
	return false;
}