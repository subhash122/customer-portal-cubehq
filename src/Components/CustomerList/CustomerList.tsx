import { Customer } from '../../types/customer';

interface CustomerListProps {
    customerList: Customer[];
    selectedCustomer: Customer | null;
    onSelectCustomer: (customer: Customer) => void;
}
function CustomerList({ customerList, selectedCustomer, onSelectCustomer }: CustomerListProps) {

    return (
        <>
            <h1 className="text-2xl font-bold p-4">Customers</h1>
            <div className="flex-grow overflow-y-auto">
                {
                    customerList.map((customer) =>
                        <div
                            className={`p-4 cursor-pointer hover:shadow-lg ${selectedCustomer?.id === customer.id ? 'bg-gray-300 border-r-slate-600 border-r-2 shadow-lg' : 'hover:bg-gray-100'}`}
                            onClick={() => onSelectCustomer(customer)}
                            key={customer.id}
                        >
                            <h3 className="font-bold">{customer.name}</h3>
                            <p className="text-sm text-gray-700">{customer.title}</p>
                        </div>
                    )
                }
            </div>

        </>

    )
}

export default CustomerList
