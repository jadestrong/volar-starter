
export async function pageBack(beforeBack?: () => void) {
  if (typeof beforeBack === 'function') {
    await beforeBack();
  }
}
