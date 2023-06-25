export default function Forbidden() {
    return (
        <section className="flex items-center h-full p-16 bg-gray-300 text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                        <span className="sr-only">Error</span>403
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl text-gray-700">Not this time.</p>
                    <p className="mt-4 mb-8 text-gray-700 font-bold">Access Forbidden</p>
                    <a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded bg-blue-800 text-white">Back to homepage</a>
                </div>
            </div>
        </section>
    )
}