export const convertTimeFormat = (items) => {
  const newItem = items.map((post) => {
    const now = new Date();
    const targetDate = new Date(post.created_at);
    const timeDifference = now - targetDate;
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);

    let displayText = '';

    if (daysDifference === 1) {
      displayText = 'yesterday';
    } else if (daysDifference > 1) {
      displayText = `${daysDifference} days ago`;
    } else if (hoursDifference >= 1) {
      displayText = `${hoursDifference}h ago`;
    } else {
      displayText = `${minutesDifference}m ago`;
    }

    return { ...post, created_at: displayText };
  });

  return newItem;
}
