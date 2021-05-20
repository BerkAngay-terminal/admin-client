import OrderService from "../../services/OrderService"
import OrderOperationsMenu from "./OrderOperationsMenu"

const orders = [
    { id: 1, productName: 'Siemens WM12T581TR Çamaşır Makinesi', brand: 'Siemens', orderNumber: 'Test123Test', grossAmount: 2999.9, totalDiscount: 99.9, orderDate: '17.05.2021', estimatedDeliveryDate: '20.05.2021', orderStatus: 'Picking', address: 'Gürpınar, 7234 Sk. 2/A, 35060 Işıkkent / Bornova/Bornova/İzmir' },
    { id: 1, productName: 'Siemens WM12T581TR Çamaşır Makinesi', brand: 'Siemens', orderNumber: 'Test123Test', grossAmount: 2999.9, totalDiscount: 99.9, orderDate: '17.05.2021', estimatedDeliveryDate: '20.05.2021', orderStatus: 'Picking', address: 'Gürpınar, 7234 Sk. 2/A, 35060 Işıkkent / Bornova/Bornova/İzmir' },
    { id: 1, productName: 'Siemens WM12T581TR Çamaşır Makinesi', brand: 'Siemens', orderNumber: 'Test123Test', grossAmount: 2999.9, totalDiscount: 99.9, orderDate: '17.05.2021', estimatedDeliveryDate: '20.05.2021', orderStatus: 'Picking', address: 'Gürpınar, 7234 Sk. 2/A, 35060 Işıkkent / Bornova/Bornova/İzmir' },
    { id: 1, productName: 'Siemens WM12T581TR Çamaşır Makinesi', brand: 'Siemens', orderNumber: 'Test123Test', grossAmount: 2999.9, totalDiscount: 99.9, orderDate: '17.05.2021', estimatedDeliveryDate: '20.05.2021', orderStatus: 'Picking', address: 'Gürpınar, 7234 Sk. 2/A, 35060 Işıkkent / Bornova/Bornova/İzmir' },
    { id: 1, productName: 'Siemens WM12T581TR Çamaşır Makinesi', brand: 'Siemens', orderNumber: 'Test123Test', grossAmount: 2999.9, totalDiscount: 99.9, orderDate: '17.05.2021', estimatedDeliveryDate: '20.05.2021', orderStatus: 'Picking', address: 'Gürpınar, 7234 Sk. 2/A, 35060 Işıkkent / Bornova/Bornova/İzmir' },
    { id: 1, productName: 'Siemens WM12T581TR Çamaşır Makinesi', brand: 'Siemens', orderNumber: 'Test123Test', grossAmount: 2999.9, totalDiscount: 99.9, orderDate: '17.05.2021', estimatedDeliveryDate: '20.05.2021', orderStatus: 'Picking', address: 'Gürpınar, 7234 Sk. 2/A, 35060 Işıkkent / Bornova/Bornova/İzmir' },
    { id: 1, productName: 'Siemens WM12T581TR Çamaşır Makinesi', brand: 'Siemens', orderNumber: 'Test123Test', grossAmount: 2999.9, totalDiscount: 99.9, orderDate: '17.05.2021', estimatedDeliveryDate: '20.05.2021', orderStatus: 'Picking', address: 'Gürpınar, 7234 Sk. 2/A, 35060 Işıkkent / Bornova/Bornova/İzmir' },
    { id: 1, productName: 'Siemens WM12T581TR Çamaşır Makinesi', brand: 'Siemens', orderNumber: 'Test123Test', grossAmount: 2999.9, totalDiscount: 99.9, orderDate: '17.05.2021', estimatedDeliveryDate: '20.05.2021', orderStatus: 'Picking', address: 'Gürpınar, 7234 Sk. 2/A, 35060 Işıkkent / Bornova/Bornova/İzmir' },
    { id: 1, productName: 'Siemens WM12T581TR Çamaşır Makinesi', brand: 'Siemens', orderNumber: 'Test123Test', grossAmount: 2999.9, totalDiscount: 99.9, orderDate: '17.05.2021', estimatedDeliveryDate: '20.05.2021', orderStatus: 'Picking', address: 'Gürpınar, 7234 Sk. 2/A, 35060 Işıkkent / Bornova/Bornova/İzmir' },
    { id: 1, productName: 'Siemens WM12T581TR Çamaşır Makinesi', brand: 'Siemens', orderNumber: 'Test123Test', grossAmount: 2999.9, totalDiscount: 99.9, orderDate: '17.05.2021', estimatedDeliveryDate: '20.05.2021', orderStatus: 'Picking', address: 'Gürpınar, 7234 Sk. 2/A, 35060 Işıkkent / Bornova/Bornova/İzmir' },
    { id: 1, productName: 'Siemens WM12T581TR Çamaşır Makinesi', brand: 'Siemens', orderNumber: 'Test123Test', grossAmount: 2999.9, totalDiscount: 99.9, orderDate: '17.05.2021', estimatedDeliveryDate: '20.05.2021', orderStatus: 'Picking', address: 'Gürpınar, 7234 Sk. 2/A, 35060 Işıkkent / Bornova/Bornova/İzmir' },

]

OrderService.getOrderList();

export default function Orders() {
    return (
        <ul className="space-y-3">
            {orders.map((order) => (
                <li key={order.id} className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md hover:shadow-lg hover:-translate-y-1 transform transition">
                    <div className="flex justify-between flex-wrap content-center " >
                        <div className="flex flex-col">
                            <div className="text-base text-gray-600 font-medium" >{order.productName}</div>
                            <div className="text-sm text-gray-400 font-medium" >{order.brand}</div>
                        </div>
                        <div className="text-sm text-gray-500 font-medium" >{order.orderNumber}</div>
                        <div className="text-base text-gray-600 font-semibold" >{order.grossAmount} ₺</div>
                        <div className="text-sm text-gray-600 font-medium" >{order.orderDate}</div>
                        <div className="text-sm text-gray-500 font-medium hover:text-indigo-500" >{order.orderStatus}</div>
                        <OrderOperationsMenu />
                    </div>
                    
                </li>
            ))}
            
        </ul>
    )
}