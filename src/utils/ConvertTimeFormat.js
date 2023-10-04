export const convertTimeFormat = (items) => {
  const newItem = items.map((post) => {
    const now = new Date();
    const targetDate = new Date(post.created_at);
    const timeDifference = now - targetDate;
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    const hoursDifference = Math.floor(minutesDifference / 60);

    let displayText = '';

    if (minutesDifference < 60) {
      displayText = `${minutesDifference}m ago`;
    } else {
      displayText = `${hoursDifference}h ago`;
    }

    return { ...post, created_at: displayText };
  });

  return newItem
}