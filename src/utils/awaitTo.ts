/**
 * Async await wrapper for easy error handling
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 * 
     let err, user, savedTask, notification;

     [ err, user ] = await awaitTo(UserModel.findById(1));
     if(!user) return cb('No user found');

     [ err, savedTask ] = await awaitTo(TaskModel({userId: user.id, name: 'Demo Task'}));
     if(err) return cb('Error occurred while saving task');

    if(user.notificationsEnabled) {
       [ err ] = await awaitTo(NotificationService.sendNotification(user.id, 'Task Created'));
       if(err) return cb('Error while sending notification');
    }

    if(savedTask.assignedUser.id !== user.id) {
       [ err, notification ] = await awaitTo(NotificationService.sendNotification(savedTask.assignedUser.id, 'Task was created for you'));
       if(err) return cb('Error while sending notification');
    }

    cb(null, savedTask);

    const [err, user] = await awaitTo(UserModel.findById(1));
    if (!user) throw new Error('User not found');
  

 */
export function awaitTo<T, U = Error>(
    promise: Promise<T>,
    errorExt?: Record<string, any>
): Promise<[U, undefined] | [null, T]> {
    return promise
        .then<[null, T]>((data: T) => [null, data])
        .catch<[U, undefined]>((err: U) => {
            if (errorExt) {
                Object.assign(err, errorExt);
            }

            return [err, undefined];
        });
}

export default awaitTo;
