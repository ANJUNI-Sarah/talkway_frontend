# Hook

## useChatId

儲存chat_id狀態，要接續對話時須帶chat_id作為參數給後端。

## useCountdownBar

使用CountdownBar元件時，可使用此hook, return參數可傳入CountdownBar元件使用。

## useMedia

儲存錄音的狀態，分為以下狀態：

-   userRecording (使用者錄音)
-   chatGptRecording (gpt的對話內容)
-   media (userRecording+chatGptRecording)

包含只寫函式：

-   updateUserRecording
-   updateChatGptRecording
