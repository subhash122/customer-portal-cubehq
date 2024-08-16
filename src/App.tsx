import { useEffect, useState } from 'react'
import './App.css'
import CustomerList from './Components/CustomerList/CustomerList'
import CustomerDetails from './Components/CustomerDetails/CustomerDetails'
import { Customer } from './types/customer';
import { fetchCustomers } from './Services/dataService';
import { toast, ToastContainer } from 'react-toastify';

function App() {
  const [customerList, setCustomerList] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const fetchedCustomers = await fetchCustomers();
        setCustomerList(fetchedCustomers);
      } catch (error:any) {
        toast.error(error?.message ?? 'something went wrong while fetching customers. please try again later');
      }
    })()

  }, []);

  return (
    <>
     <ToastContainer position="top-center" />
      <div className='flex h-screen'>
        <div className="w-1/3 flex flex-col">
          <CustomerList customerList={customerList}
            selectedCustomer={selectedCustomer}
            onSelectCustomer={setSelectedCustomer} />
        </div>
        <div className="w-2/3 bg-slate-100 flex flex-col">
          <CustomerDetails selectedCustomer={selectedCustomer} />
        </div>
      </div>
    </>
  )
}

export default App
