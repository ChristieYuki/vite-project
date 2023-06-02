interface CustomBottonProps {
    children: string
}

export function CustomButton({children}:CustomBottonProps) {
    return(
        <button>
            {children}
        </button>
    )
}