import { useEffect } from "react";

const Pagination = ({ page, totalPages, setPage }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || Math.abs(i - page) <= 1) {
            pages.push(i);
        } else if (
            (i === page - 2 && page > 3) ||
            (i === page + 2 && page < totalPages - 2)
        ) {
            pages.push("...");
        }
    }

    const disabledSVG = "#B6C9D3"
    const activeSVG = "#0F172A"

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [page]);

    return (
        <div className="flex justify-end items-center gap-3 mt-8 text-sm text-goodbot-primary">
            <button
                onClick={() => {
                    setPage(1)
                }}
                disabled={page === 1}
            >
                <svg transform="rotate(180)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.2803 11.4697C13.5732 11.7626 13.5732 12.2374 13.2803 12.5303L5.78033 20.0303C5.48744 20.3232 5.01256 20.3232 4.71967 20.0303C4.42678 19.7374 4.42678 19.2626 4.71967 18.9697L11.6893 12L4.71967 5.03033C4.42678 4.73744 4.42678 4.26256 4.71967 3.96967C5.01256 3.67678 5.48744 3.67678 5.78033 3.96967L13.2803 11.4697Z" fill={page === 1 ? disabledSVG : activeSVG} />
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.2803 11.4697C19.5732 11.7626 19.5732 12.2374 19.2803 12.5303L11.7803 20.0303C11.4874 20.3232 11.0126 20.3232 10.7197 20.0303C10.4268 19.7374 10.4268 19.2626 10.7197 18.9697L17.6893 12L10.7197 5.03033C10.4268 4.73744 10.4268 4.26256 10.7197 3.96967C11.0126 3.67678 11.4874 3.67678 11.7803 3.96967L19.2803 11.4697Z" fill={page === 1 ? disabledSVG : activeSVG} />
                </svg>
            </button>

            <button
                onClick={() => {
                    setPage(prev => prev - 1)
                }}
                disabled={page === 1}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 19.5L8.25 12L15.75 4.5" stroke={page === 1 ? disabledSVG : activeSVG} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </button>

            {pages.map((p, i) =>
                p === "..." ? (
                    <span key={i} className="">...</span>
                ) : (
                    <button
                        key={i}
                        onClick={() => {
                            setPage(p)
                        }}
                        className={`w-9 h-9 flex items-center justify-center rounded 
                            ${page === p ? "bg-goodbot-button-primary" : ""}`
                        }
                    >
                        {p}
                    </button>
                )
            )}

            <button
                onClick={() => {
                    setPage(prev => prev + 1)
                }
                }
                disabled={page === totalPages}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke={page === totalPages ? disabledSVG : activeSVG} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </button>

            <button
                onClick={() => {
                    setPage(totalPages)
                }}
                disabled={page === totalPages}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.2803 11.4697C13.5732 11.7626 13.5732 12.2374 13.2803 12.5303L5.78033 20.0303C5.48744 20.3232 5.01256 20.3232 4.71967 20.0303C4.42678 19.7374 4.42678 19.2626 4.71967 18.9697L11.6893 12L4.71967 5.03033C4.42678 4.73744 4.42678 4.26256 4.71967 3.96967C5.01256 3.67678 5.48744 3.67678 5.78033 3.96967L13.2803 11.4697Z" fill={page === totalPages ? disabledSVG : activeSVG} />
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.2803 11.4697C19.5732 11.7626 19.5732 12.2374 19.2803 12.5303L11.7803 20.0303C11.4874 20.3232 11.0126 20.3232 10.7197 20.0303C10.4268 19.7374 10.4268 19.2626 10.7197 18.9697L17.6893 12L10.7197 5.03033C10.4268 4.73744 10.4268 4.26256 10.7197 3.96967C11.0126 3.67678 11.4874 3.67678 11.7803 3.96967L19.2803 11.4697Z" fill={page === totalPages ? disabledSVG : activeSVG} />
                </svg>

            </button>

        </div >
    );
};

export default Pagination;