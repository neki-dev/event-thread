/**
 * Event handler
 *
 * @param payload - Event data
 */
export type EventHandler<T = void> = (payload: T) => void;

export type Event<T = void> = {
  /**
   * Subscribe
   *
   * @param handler - Event handler
   */
  (handler: EventHandler<T>): VoidFunction;

  /**
   * Unsubscribe
   *
   * @param handler  - Event handler
   */
  unsubscribe: (handler: EventHandler<T>) => void;

  /**
   * Call all handlers
   *
   * @param payload - Event data
   */
  invoke: (payload: T) => void;

  /**
   * Delete all handlers
   */
  clear: VoidFunction;
};
