export  async function uploadImageToImgBB( imageFile) {
    const formData = new FormData();
    formData.append('image', imageFile);
    console.log(process.env.NEXT_PUBLIC_IMG_HOSTING_KEY, "key");
    try {
        const response = await fetch('https://api.imgbb.com/1/upload?key=' + process.env.NEXT_PUBLIC_IMG_HOSTING_KEY, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to upload image');
        }

        const result = await response.json();
        
        return {display_url
            :result.data.display_url,
            delete_url: result.data.delete_url
        }; // URL of the uploaded image
    } catch (error) {
        console.error('Error uploading image:', error);
        return null;
    }
}







export  async function deleteImageFromImgBB(deletionUrl) {
    try {
        const response = await fetch(`https://api.imgbb.com/1/image/delete?key=${process.env.NEXT_PUBLIC_IMG_HOSTING_KEY}&image_url=${encodeURIComponent(deletionUrl)}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // Add other necessary headers if required by imgbb
          },
        });
    
        const data = await response.json();
            return data
      } catch (error) {
        console.error('Error deleting image:', error);
        alert({ error: 'Failed to delete image' });
      }
}