import { Customer } from '../../types/customer';
import PhotoGrid from '../PhotoGrid/PhotoGrid';

interface CustomerDetailsProps {
    selectedCustomer: Customer | null;
}

function CustomerDetails({ selectedCustomer }: CustomerDetailsProps) {
    return (
        <>
            <h1 className="text-2xl p-4 text-center  font-semibold">Customer Details</h1>
            {
                selectedCustomer ? (
                    <div className=" overflow-y-auto">
                        <div className="p-4">
                            <div className="text-center">
                                <h2 className="text-xl font-semibold mb-2">{selectedCustomer.name}</h2>
                                <p className="mb-2 "><strong>Title:</strong> {selectedCustomer.title}</p>
                                <p className="mb-4"><strong>Address:</strong> {selectedCustomer.address}</p>
                            </div>
                        </div>
                        <div className="">
                            <PhotoGrid selectedCustomerId={selectedCustomer.id} />

                        </div>
                    </div>) : (
                    <div className="text-xl flex items-center justify-center h-full text-gray-500">
                        Select customer to view details
                    </div>
                )
            }

        </>
    )
}

export default CustomerDetails
