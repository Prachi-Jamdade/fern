/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.query.types;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.lang.Boolean;
import java.lang.Object;
import java.lang.String;

public final class AliasToStream {
  private final Boolean value;

  private AliasToStream(Boolean value) {
    this.value = value;
  }

  @JsonValue
  public Boolean get() {
    return this.value;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    return this == other || (other instanceof AliasToStream && this.value.equals(((AliasToStream) other).value));
  }

  @java.lang.Override
  public int hashCode() {
    return value.hashCode();
  }

  @java.lang.Override
  public String toString() {
    return value.toString();
  }

  @JsonCreator(
      mode = JsonCreator.Mode.DELEGATING
  )
  public static AliasToStream of(Boolean value) {
    return new AliasToStream(value);
  }
}
