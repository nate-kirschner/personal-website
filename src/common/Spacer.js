

const Spacer = ({ width = 0, height = 0 }) => {
    return (
        <div
            style={{
                paddingLeft: width,
                paddingBottom: height,
            }}
        />
    )
}

export default Spacer;