<template>

        <div class="mb-3 card user-card " :class="usercard">
            <div class="p-3 ">
                <div class="d-flex flex-row p-3 justify-content-around flex-gap-20" v-if="name">
                    <div class="align-middle">
                        <slot name="profile"></slot>
                    </div>
                    <div class="h-25 d-flex flex-column pt-2 w-75" v-if="name">
                        <span class=" text-l h5" style="font-weight:600">
                            {{ name }}
                        </span>
                        <span class="lh-1 text-muted fw-lighter text-sm font-weight-bold position-relative start-3" v-if="roll">
                            {{ roll }}
                        </span>
                    </div>
                    <div class="mt-2 pt-2 text-sm d-flex">
                        <ActiveIcon :fill="status ? 'green' : 'red'" class="radio-icon-position" /> Active
                    </div>
                </div>

                <div v-if="userdetails">
                    <div>
                        <div class="text-md font-weight-bold">ID:101</div>
                        <div class="row">
                            <div class="col">
                                <span class="text-sm text-muted">joining since: </span>
                                <span class="text-sm font-weight-bold">2020/12/15</span>
                            </div>
                            <div class="col">
                                <span class="text-sm text-muted">Email: </span>
                                <span class="text-sm font-weight-bold">yawgraham@gmail.com</span>
                            </div>
                            <div class="w-100"></div>
                            <div class="col">
                                <span class="text-sm text-muted">Phone number: </span>
                                <span class="text-sm font-weight-bold">0277400000</span>
                            </div>
                            <div class="col">
                                <span class="text-sm text-muted">Subzone: </span>
                                <span class="text-sm font-weight-bold">N12</span>
                            </div>
                            <div class="w-100"></div>
                            <div class="col">
                                <span class="text-sm text-muted">Zone: </span>
                                <span class="text-sm font-weight-bold">Northen</span>
                            </div>
                            <div class="col">
                                <span class="text-sm text-muted"> Address: </span>
                                <span class="text-sm font-weight-bold">Agbogra-Ashongman</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>




</template>
  
<script>
import ActiveIcon from '../../icons/ActiveIcon.vue';

export default {
    name: "MiniStatisticsCard",
    components: { ActiveIcon },
    props:{
        name:String,
        roll:String,
        status:Boolean,
        usercard:String,
        userdetails:Boolean
    }
};
</script>

<style scoped></style>
  