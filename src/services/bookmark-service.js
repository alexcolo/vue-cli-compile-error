import { getters, actions } from "@/store";
import { getQlikApp } from "@/services/qlik-service";

export async function getQlikBookmarksFromApp(appName) {
  const qlikApp = await getQlikApp(appName);

  if (qlikApp) {
    return qlikApp.getList("BookmarkList", function(reply) {
      let bookmarkList = [];

      // if (reply.qBookmarkList.qItems.length) {
      //   bookmarkList = reply.qBookmarkList.qItems.map(b => {
      //     return {
      //       id: b.qInfo.qId,
      //       title: b.qData.title,
      //       description: b.qData.description
      //     };
      //   });
      if (reply.qBookmarkList.qItems.length) {
        bookmarkList = reply.qBookmarkList.qItems.reduce(function(
          filtered,
          bookmark
        ) {
          //Check if bookmark it is not published (show only personal bookmarks)
          if (!bookmark.qMeta.published) {
            const bookmarksObj = {
              id: bookmark.qInfo.qId,
              title: bookmark.qData.title,
              description: bookmark.qData.description
            };
            filtered.push(bookmarksObj);
          }
          return filtered;
        },
        []);
      }

      actions.setQlikAppBookmarks(appName, bookmarkList);
      return bookmarkList;
    });
  }

  return [];
}

export async function applyBookmarkToApp(appRef, bookId) {
  const qlikApp = await getQlikApp(appRef);

  if (qlikApp) {
    return qlikApp.bookmark.apply(bookId);
  }
}

// export async function applyGlobalBookmark(bookId) {
//   const appDefs = getters.getAppDefs();
//   const appsArray = Object.keys(appDefs);

//   if (appsArray.length) {
//     try {
//       const isSettled = await Promise.allSettled(
//         appsArray.map(appName => applyBookmarkToApp(appName, bookId))
//       );

//       return isSettled;
//     } catch (err) {
//       console.error(err);
//       return false;
//     }
//   }
// }

export async function createBookmarkOnApp(appRef, bookmark) {
  const qlikApp = await getQlikApp(appRef);

  if (qlikApp) {
    const reply = await qlikApp.model.engineApp.createBookmark({
      qProp: {
        qInfo: {
          qId: bookmark.id,
          qType: "bookmark"
        },
        qMetaDef: {
          title: bookmark.title,
          description: bookmark.description
        }
      }
    });

    return reply.id;
  }
}

export async function removeBookmarkFromApp(appName, bookId) {
  const qlikApp = await getQlikApp(appName);

  if (qlikApp) {
    return qlikApp.bookmark.remove(bookId);
  }
}

export async function updateBookmarkOnApp(appName, bookmark) {
  const qlikApp = await getQlikApp(appName);

  if (qlikApp) {
    const oldBook = await qlikApp.model.engineApp.getBookmark(bookmark.id);

    if (oldBook) {
      return oldBook.setProperties({
        qProp: {
          qInfo: {
            qId: bookmark.id,
            qType: "bookmark"
          },
          qMetaDef: {
            title: bookmark.title,
            description: bookmark.description
          }
        }
      });
    }
  }
}

export async function addBookmark(bookmark, setToStartup) {
  const appName = getters.qlikCurrentApp();

  await createBookmarkOnApp(appName, bookmark);

  actions.updateStartupBookmark(appName, bookmark.id, setToStartup);
}

export async function updateBookmark(bookmark, setToStartup) {
  const appName = getters.qlikCurrentApp();

  try {
    await updateBookmarkOnApp(appName, bookmark);
  } catch {
    console.error(`${bookmark.title} bookmark is not available in ${appName}`);
  }

  actions.updateStartupBookmark(appName, bookmark.id, setToStartup);
}

export async function removeBookmark(bookmarkId, setToStartup) {
  const appName = getters.qlikCurrentApp();

  await removeBookmarkFromApp(appName, bookmarkId);

  actions.updateStartupBookmark(
    appName,
    bookmarkId,
    setToStartup,
    setToStartup
  );
}

export default {
  addBookmark,
  removeBookmark,
  applyBookmarkToApp,
  // applyGlobalBookmark,
  createBookmarkOnApp,
  updateBookmarkOnApp,
  removeBookmarkFromApp,
  getQlikBookmarksFromApp
};
