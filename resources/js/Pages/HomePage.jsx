import CardFood from '@/Components/CardFood';
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import { useMemo, useState } from 'react';

export default function HomePage({ data }) {

    const [bill, setBill] = useState([])

    const addToBill = (productToAdd) => {
        const existingProductIndex = bill.findIndex((product) => product.id === productToAdd.id);

        if (existingProductIndex !== -1) {
            const updatedBill = [...bill];
            updatedBill[existingProductIndex].quantity++;
            updatedBill[existingProductIndex].price += productToAdd.price;

            setBill(updatedBill);
        } else {
            setBill((prevState) => [
                ...prevState,
                {
                    ...productToAdd,
                    quantity: 1
                },
            ]);
        }
    }

    const contentFood = data?.map((e) => <CardFood onClick={() => addToBill(e)} image={e.image} price={e.price} title={e.name} key={e.id} />)

    const totalBill = useMemo(() => {
        return bill.reduce((total, product) => {
            const productTotal = product.price * product.quantity;
            return total + productTotal;
        }, 0);
    }, [bill]);


    return (
        <>
            <Head title='Home' />
            <Layout>
                <div className='grid grid-cols-6 gap-4'>
                    {/* Products */}
                    <div className="col-span-4 grid grid-cols-3 gap-4">
                        {contentFood}
                    </div>
                    {/* Bill */}
                    <div className='col-span-2'>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Pesanan</h2>
                                <div className='min-h-[200px] flex items-center flex-col gap-3 w-full'>
                                    {bill.length === 0 ? <div className='m-auto'>Tidak ada pesanan</div> :
                                        bill.map((e) => {
                                            return (
                                                <div className='flex items-center gap-1 justify-between w-full' key={e.id}>
                                                    <div className="avatar">
                                                        <div className="w-24 rounded">
                                                            <img src={`/${e.image}`} />
                                                        </div>
                                                    </div>
                                                    <div className='w-1/4 text-left'>
                                                        {e.name}
                                                    </div>
                                                    <div>
                                                        x{e.quantity}
                                                    </div>
                                                    <div>
                                                        {e.price}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="card-actions w-full">
                                    <button onClick={() => setBill([])} className="btn btn-block btn-outline btn-error">Clear</button>
                                    <div className='flex gap-4 w-full'>
                                        <div className='w-full'>
                                            <button className="btn btn-primary btn-block btn-success">Save Bill</button>
                                        </div>
                                        <div className='w-full'>
                                            <button className="btn btn-primary btn-block btn-success">Print Bill</button>
                                        </div>
                                    </div>
                                    <button className="btn btn-block btn-primary">Charge ${totalBill}</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
