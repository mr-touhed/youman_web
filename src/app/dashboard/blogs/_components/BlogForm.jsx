"use client"
const BlogForm = () => {
    return (
        <form className="max-w-[80%] mx-auto space-y-6">
            <div className="grid grid-cols-2 gap-3 items-center border p-2">
                    <div className="grid gap-1">
                    <label htmlFor="image" className="text-sm font-semibold">Title</label>
                    <input type="file" name="image" id="image" className=" p-1"/>
                    </div>
                    <div className="h-48 ">

                        {/* TASK: Upload image will be show there  */}

                    </div>
                </div>
                <div className="grid gap-1">
                    <label htmlFor="title" className="text-sm font-semibold">Title</label>
                    <input type="text" name="title" id="title" className="border p-1"/>
                </div>
                <div className="grid gap-1">
                    <label htmlFor="details" className="text-sm font-semibold">Details</label>
                    <textarea type="text" name="details" id="details" className="border p-1 h-96"/>
                </div>
                <div className="grid gap-1">
                    <label htmlFor="tag" className="text-sm font-semibold">Tag</label>
                    <select name="tag" id="tag" className="border p-1">
                            <option value="Travle">Travle</option>
                            <option value="Career">Career</option>
                            <option value="Education">Education</option>
                            <option value="Finance">Finance</option>
                    </select>
                </div>
                <div className="grid gap-1">
                    <label htmlFor="url" className="text-sm font-semibold">Blog Link </label>
                    <input type="url" name="url" id="url" className="border p-1" placeholder="https://"/>
                </div>

                <button type="submit" className="bg-green-700 w-[300px] py-3 mx-auto block text-white">Post</button>
        </form>
    );
};

export default BlogForm;