let parkingSpaceData=[]
let result=fetch('https://datacenter.taichung.gov.tw/swagger/OpenData/791a8a4b-ade6-48cf-b3ed-6c594e58a1f1')
  .then(response => response.json())
  .then(data => console.log(data))


  