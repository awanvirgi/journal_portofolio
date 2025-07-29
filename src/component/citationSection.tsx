const CitationSection = () => {
    return (
        <div className="bg-white px-4 py-2 lg:px-17 lg:pb-11">
            <h3 className="lg:text-3xl text-xl font-semibold mb-4">4. References and Contact</h3>
            <ul className="lg:text-lg text-sm flex flex-col gap-1">
                <li>
                    [1] VSGA - Digitalent Kominfo, "<em>Junior Web Developer</em>," BNSP Certification, Indonesia, 2023.
                </li>
                <li>
                    [2] Skilvul, <em>"JavaScript Intermediate"</em>. Sertifikat pelatihan online, Skilvul Academy, 2023.
                </li>
                <li>
                    [3] Skilvul, <em>"TypeScript Dasar"</em>. Sertifikat pelatihan online, Skilvul Academy, 2023.
                </li>
                <li>
                    [4] Dicoding Indonesia, <em>"Belajar Dasar Pemrograman JavaScript"</em>. Sertifikat pelatihan online, Dicoding, 2025.
                </li>
                <li>
                    [5] Dicoding Indonesia, <em>"Belajar Back-End untuk Pemula"</em>. Sertifikat pelatihan online, Dicoding, 2025.
                </li>
            </ul>
            <section className="mt-6" id="ContactMe">
                <h3 className="text-base font-medium mb-1">For further inquiries, please contact:</h3>
                <ul className="text-gray-700 space-y-1">
                    <li className="text-2xl"><strong>Virgiawan Sanria</strong></li>
                    <li className="text-base">Email: <a href="mailto:virgiawansanria@gmail.com" className="text-blue-600 underline">virgiawansanria@gmail.com</a></li>
                </ul>
            </section>
            <hr className="font-bold h-[3px] bg-black border-0 rounded mb-4 mt-6" />
        </div>
    )
}
export default CitationSection