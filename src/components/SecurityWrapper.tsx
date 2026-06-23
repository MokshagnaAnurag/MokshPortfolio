import React, { useEffect } from "react";

export function SecurityWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Prevent context menu (right click)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Prevent copy, cut, paste
    const handleCopyCut = (e: ClipboardEvent) => {
      e.preventDefault();
      navigator.clipboard.writeText("Content copying is disabled.").catch(() => { });
    };

    // 3. Prevent dragging of images or elements
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // 4. Handle keydown for copying shortcuts and DevTools
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Copy/Paste/Select All/Save/Print
      if ((e.ctrlKey || e.metaKey) && ["c", "a", "p", "s", "x"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }

      // Prevent F12 (DevTools)
      if (e.key === "F12") {
        e.preventDefault();
      }

      // Prevent Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (DevTools Shortcuts)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ["i", "j", "c"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }

      // Prevent Ctrl+U (View Source)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "u") {
        e.preventDefault();
      }
    };

    // Global CSS to disable text selection completely
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";

    // Add event listeners
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("copy", handleCopyCut);
    window.addEventListener("cut", handleCopyCut);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("dragstart", handleDragStart);

    return () => {
      // Cleanup
      document.body.style.userSelect = "auto";
      document.body.style.webkitUserSelect = "auto";
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("copy", handleCopyCut);
      window.removeEventListener("cut", handleCopyCut);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  // Seamlessly render the children with no overlays
  return <>{children}</>;
}
