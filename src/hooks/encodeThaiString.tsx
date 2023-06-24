const toThaiSlug = (inputString: string) => {
    const slug = decodeURIComponent(inputString);
    return slug;
};

export default toThaiSlug;