export const httpResponse = (code, data, res) => {
    const response = {
        success: code < 400,
        data: data,
    };
    return res.status(code).json(response);
};
