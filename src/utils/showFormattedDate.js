function postedAt(date) {
  const now = new Date();
  const posted = new Date(date);
  const diff = now - posted;
  // const diffSeconds = Math.floor(diff / 1000);
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30); // Rata-rata 30 hari per bulan
  const diffYears = Math.floor(diffDays / 365); // Rata-rata 365 hari per tahun

  if (diffYears > 0) {
    return `${diffYears} tahun yang lalu`;
  }
  if (diffMonths > 0) {
    return `${diffMonths} bulan yang lalu`;
  }
  if (diffWeeks > 0) {
    return `${diffWeeks} minggu yang lalu`;
  }
  if (diffDays > 0) {
    return `${diffDays} hari yang lalu`;
  }
  if (diffHours > 0) {
    return `${diffHours} jam yang lalu`;
  }
  if (diffMinutes > 0) {
    return `${diffMinutes} menit yang lalu`;
  }
  // if (diffSeconds > 0) {
  //   return `${diffSeconds} detik yang lalu`;
  // }
  return 'Baru saja';
}

export { postedAt };
