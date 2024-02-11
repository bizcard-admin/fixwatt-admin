import axiosClient from "./axiosClient";

// authentication

export async function login({phone, password}){
  return await axiosClient.post(`/auth/login`, { phone, password });
}

// users

export async function getUsers(){
  return await axiosClient.get(`/user`);
}

// orders

export async function getOrders(){
  return await axiosClient.get(`/order`);
}

// technicians

export async function getTechnicians(){
  return await axiosClient.get(`/technician`);
}

export async function deleteTechnician(id){
  return await axiosClient.delete(`/technician/${id}`);
}

export async function updateTechnician({name, phone, categoryId, technician}){
  const data = { name, phone, category_id: categoryId };
  if(technician){
    return await axiosClient.put(`/technician/${technician.id}`, data);
  }else{
    return await axiosClient.post(`/technician`, data);
  }
}

// categories

export async function getCategories(){
  return await axiosClient.get(`/category`);
}

// service

export async function getServices(){
  return await axiosClient.get(`/service`);
}

export async function deleteService(id){
  return await axiosClient.delete(`/service/${id}`);
}

export async function updateService({name, price, categoryId, iconBlob, imageBlob, service}){

  const formDataToSend = new FormData();
  formDataToSend.append('name', name)
  formDataToSend.append('price', price)
  formDataToSend.append('category_id', categoryId)
  if(typeof iconBlob !== 'string'){
    formDataToSend.append('icon', iconBlob, 'icon.jpeg')
  }
  if(typeof imageBlob !== 'string'){
    formDataToSend.append('image', imageBlob, 'image.jpeg')
  }
  return service 
    ? await axiosClient.put(`/service/${service.id}`, formDataToSend)
    : await axiosClient.post(`/service`, formDataToSend);
}
