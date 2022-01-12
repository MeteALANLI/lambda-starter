exports.handler = async (event) => {
    const { body, httpMethod } = event;
    let responseBody = 'ERROR';
    let statusCode = '200';
    const headers = { 'Content-Type': 'application/json' };

    // Write anything you want here or write a case for another httpMethod that you need.
    // It does not matter which file or how you handle this. Just call the thing you want to run in here.
    try {
        switch (httpMethod) {
            case 'POST':
                responseBody = 'SUCCEED';
                break;
            default:
                throw new Error(`Unsupported method "${httpMethod}"`);
        }
    } catch (err) {
        statusCode = '400';
        responseBody = err.message;
    } finally {
        responseBody = JSON.stringify(responseBody);
    }

    console.log('Response Body ' + responseBody);
    return {
        statusCode,
        body: responseBody,
        headers,
    };
};