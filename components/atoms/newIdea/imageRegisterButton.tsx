const ImageRegisterButton = () => {
    return (
        <label className="block w-full p-8 text-center bg-light-gray03">
            <button className="bg-dark-blue text-white w-40 text-sm p-1.5 rounded">画像をアップロード</button>
            <input
                type="file"
                multiple
                accept="image/*,.png,.jpg,.jpeg,.gif"
                style={{ display: "none" }}
            />
        </label>
    )
}

export default ImageRegisterButton;