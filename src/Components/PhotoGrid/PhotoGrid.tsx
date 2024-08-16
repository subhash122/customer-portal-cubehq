import { useEffect, useState } from 'react'
import { fetchImages } from '../../Services/dataService';
import { toast } from 'react-toastify';
import { ImageResponse } from '../../types/customer';

interface PhotoGridProps {
    selectedCustomerId: number;
}
function PhotoGrid({ selectedCustomerId }: PhotoGridProps) {
    const [images, setImages] = useState<ImageResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                setLoading(true);
                const photos = await fetchImages();
                setImages(photos);
            } catch (error: any) {
                toast.error(error?.message ?? 'something went wrong while fetching photos. please try again later');
            } finally {
                setLoading(false);
            }

        };

        fetchPhotos();
        const intervalId = setInterval(fetchPhotos, 10000);

        return () => clearInterval(intervalId);
    }, [selectedCustomerId]);

    return (
        <>
            {loading ? (
                <p className='text-xl text-center font-semibold'>Loading images...</p>
            ) : (
                <div className="grid grid-cols-3 gap-4 p-4">
                    {images.map((image) => (
                        <div key={image.id} >
                            <img
                                src={image.srcUrl}
                                alt="image"
                                className="w-full h-full object-cover rounded-lg"
                                style={{ maxHeight: '150px' }}
                            />
                        </div>
                    ))
                    }
                </div>
            )}
        </>
    )
}

export default PhotoGrid
