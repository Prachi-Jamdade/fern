/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.object.types;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import com.seed.object.core.WrappedAlias;
import java.util.Set;

public final class AliasSetInline implements WrappedAlias {
    private final Set<AliasInlineValue> value;

    private AliasSetInline(Set<AliasInlineValue> value) {
        this.value = value;
    }

    @JsonValue
    public Set<AliasInlineValue> get() {
        return this.value;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        return this == other || (other instanceof AliasSetInline && this.value.equals(((AliasSetInline) other).value));
    }

    @java.lang.Override
    public int hashCode() {
        return value.hashCode();
    }

    @java.lang.Override
    public String toString() {
        return value.toString();
    }

    @JsonCreator(mode = JsonCreator.Mode.DELEGATING)
    public static AliasSetInline of(Set<AliasInlineValue> value) {
        return new AliasSetInline(value);
    }
}
