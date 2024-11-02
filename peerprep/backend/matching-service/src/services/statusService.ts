import { getStatus, findMatchInQueue } from '../services/queueManager2';
// import { getSessionStatus } from '../services/sessionManager';

// declare function to retrieve the user's match request status from the queue
export const updateStatus = async (userId: string) => {
    try {
        return await getStatus(userId);
    } catch (error) {
        console.error('Error in updateStatus:', error);
        throw new Error("Failed to update the status of the user's match request");
    } finally {
        // Find match
        await findMatchInQueue(userId);
    }
    // Add session status check here
};