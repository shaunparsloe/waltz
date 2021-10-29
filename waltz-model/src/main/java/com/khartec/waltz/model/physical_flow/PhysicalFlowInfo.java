package com.khartec.waltz.model.physical_flow;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.khartec.waltz.model.Criticality;
import com.khartec.waltz.model.EntityReference;
import com.khartec.waltz.model.Nullable;
import org.immutables.value.Value;

@Value.Immutable
@JsonSerialize(as = ImmutablePhysicalFlowInfo.class)
@JsonDeserialize(as = ImmutablePhysicalFlowInfo.class)
public abstract class PhysicalFlowInfo {

    public abstract EntityReference source();
    public abstract EntityReference target();

    public abstract EntityReference specification();
    public abstract EntityReference logicalFlow();

    @Nullable
    public abstract String physicalFlowExternalId();

    @Nullable
    public abstract String physicalFlowDescription();

    public abstract TransportKindValue transportKindValue();
    public abstract FrequencyKind frequencyKind();
    public abstract Criticality criticality();

}
