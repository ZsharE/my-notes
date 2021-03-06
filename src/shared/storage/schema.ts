export interface Note {
  content: string
  createdTime: string
  modifiedTime: string
  sync?: {
    file: GoogleDriveFile
  }
}

export interface RegularFont {
  id: string
  name: string
  genericFamily: string
  fontFamily: string
}

export interface GoogleFont {
  id: string
  name: string
  fontFamily: string
  href: string
}

export type Theme = "light" | "dark" | "custom"

export enum NotificationType {
  NEW_VERSION
}

export interface Notification {
  type: NotificationType
  payload: string
}

export interface Sync {
  folderId: string
  folderLocation: string
  lastSync?: string
}

export interface GoogleDriveFile {
  id: string
  name: string
  createdTime: string
  modifiedTime: string
  content?: string
}

export interface SyncLookup extends Sync {
  files: GoogleDriveFile[]
}

export type NotesObject = {
  [key: string]: Note
}

export interface Storage {
  // Notifications
  notification?: Notification

  // Appearance
  font: RegularFont | GoogleFont
  size: number
  sidebar: boolean
  sidebarWidth?: number
  toolbar: boolean
  theme: Theme
  customTheme: string

  // Notes
  notes: NotesObject
  active: string | null
  clipboard: string | null

  // Options
  focus: boolean
  newtab: boolean
  tab: boolean

  // Sync
  sync?: Sync // Google Drive Sync
}

export interface ContextMenuSelection {
  text: string
  sender: string
}

export enum MessageType {
  SYNC_INITIATE,
  SYNC,
  SYNC_FAIL,
  SYNC_START,
  SYNC_DONE,
  SYNC_STOP,
  SYNC_DELETE_FILE,
  SAVE_TO_CLIPBOARD,
}

export interface Message {
  type: MessageType
  payload?: unknown
}
