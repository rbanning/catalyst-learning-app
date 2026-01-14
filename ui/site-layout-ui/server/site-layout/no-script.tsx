export function NoScript() {
  return (
    <noscript>
      <div className="fixed top-0 left-0 w-full bg-hallpass-background z-50 shadow-md shadow-hallpass-error">
        <div className="flex justify-center items-center gap-2 py-2 w-full bg-hallpass-error/10 text-hallpass-error-dark text-center text-sm">
          <strong className="uppercase">Hold On!</strong>
          <span>This site requires Javascript to be enabled.</span>
        </div>
      </div>
    </noscript>
  );
}
